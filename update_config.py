import re
with open('/Users/yerikkuanbaev/.codex/config.toml', 'r') as f:
    config = f.read()

if "bearer_token_env_var" not in config:
    config = config.replace('[mcp_servers.figma]\nurl = "https://mcp.figma.com/mcp"', 
                            '[mcp_servers.figma]\nurl = "https://mcp.figma.com/mcp"\nbearer_token_env_var = "FIGMA_OAUTH_TOKEN"\nhttp_headers = { "X-Figma-Region" = "us-east-1" }\n')

if "[features]" not in config:
    config = config + "\n[features]\nrmcp_client = true\n"
elif "rmcp_client" not in config:
    config = config.replace('[features]', '[features]\nrmcp_client = true')

with open('/Users/yerikkuanbaev/.codex/config.toml', 'w') as f:
    f.write(config)
