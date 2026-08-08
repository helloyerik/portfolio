#!/usr/bin/env bash
# Keep Vite on :9999 outside Cursor agent shells (launchd KeepAlive).
set -euo pipefail

LABEL="com.helloyerik.portfolio-vite"
PLIST="$HOME/Library/LaunchAgents/${LABEL}.plist"
REPO="/Users/helloyerik/Documents/portfolio"
UID_NUM="$(id -u)"
DOMAIN="gui/${UID_NUM}"

usage() {
  echo "Usage: $0 {start|stop|status|restart}"
  exit 1
}

ensure_plist() {
  if [[ ! -f "$PLIST" ]]; then
    echo "Missing LaunchAgent: $PLIST" >&2
    exit 1
  fi
}

start() {
  ensure_plist
  # Free the port if a Cursor-owned vite is lingering.
  if lsof -nP -iTCP:9999 -sTCP:LISTEN >/dev/null 2>&1; then
    lsof -ti :9999 | xargs kill -9 2>/dev/null || true
    sleep 0.4
  fi
  launchctl bootout "$DOMAIN/$LABEL" 2>/dev/null || true
  launchctl bootstrap "$DOMAIN" "$PLIST"
  launchctl enable "$DOMAIN/$LABEL" 2>/dev/null || true
  launchctl kickstart -k "$DOMAIN/$LABEL" 2>/dev/null || true
  echo "Started $LABEL (KeepAlive). http://127.0.0.1:9999/"
}

stop() {
  launchctl bootout "$DOMAIN/$LABEL" 2>/dev/null || true
  lsof -ti :9999 | xargs kill -9 2>/dev/null || true
  echo "Stopped $LABEL"
}

status() {
  if launchctl print "$DOMAIN/$LABEL" 2>/dev/null | head -n 20; then
    :
  else
    echo "$LABEL is not loaded"
  fi
  if curl -s -o /dev/null -w "HTTP %{http_code}\n" --max-time 2 http://127.0.0.1:9999/; then
    :
  else
    echo "http://127.0.0.1:9999/ not responding"
  fi
}

restart() {
  stop
  sleep 0.5
  start
}

cd "$REPO"
case "${1:-}" in
  start|stop|status|restart) "$1" ;;
  *) usage ;;
esac
