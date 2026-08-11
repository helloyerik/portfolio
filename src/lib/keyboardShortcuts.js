const isTypingTarget = (target) =>
  target instanceof HTMLElement &&
  (target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT" ||
    target.isContentEditable);

/**
 * Experimental single-key shortcuts, keyed by KeyboardEvent.code so they
 * stay layout-independent (works on RU layout too).
 */
export function startKeyboardShortcuts(handlers) {
  const onKeyDown = (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (isTypingTarget(event.target)) return;

    const handler = handlers[event.code];
    if (!handler) return;

    event.preventDefault();
    handler();
  };

  window.addEventListener("keydown", onKeyDown);
  return () => window.removeEventListener("keydown", onKeyDown);
}
