#!/bin/bash

set -euo pipefail

AUTH_TOKEN="${NPM_TOKEN:-}"
BUMP="patch"
BUMP_SET=false
RETRY=false

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --token)
            [[ "$#" -ge 2 && -n "$2" ]] || { echo "--token requires a value." >&2; exit 1; }
            AUTH_TOKEN="$2"
            shift 2
            ;;
        --bump)
            [[ "$#" -ge 2 ]] || { echo "--bump requires patch, minor or major." >&2; exit 1; }
            BUMP="$2"
            BUMP_SET=true
            shift 2
            ;;
        --retry) RETRY=true; shift ;;
        --help|-h)
            echo "Usage: bash publish.sh [--bump patch|minor|major | --retry] [--token TOKEN]"
            echo "Defaults to a patch bump. --retry publishes the existing version without a bump."
            echo "The package's publishConfig.tag selects the npm channel (beta or latest)."
            exit 0
            ;;
        *) echo "Unknown parameter passed: $1" >&2; exit 1 ;;
    esac
done

case "$BUMP" in
    patch|minor|major) ;;
    *) echo "--bump must be patch, minor or major." >&2; exit 1 ;;
esac

if [[ "$RETRY" == true && "$BUMP_SET" == true ]]; then
    echo "Use --retry or --bump, not both." >&2
    exit 1
fi

cd "$(dirname "${BASH_SOURCE[0]}")"

# Check authentication before changing the version. Existing npm login also works.
if [[ -z "$AUTH_TOKEN" ]] && ! npm whoami >/dev/null 2>&1; then
    read -r -s -p "Enter NPM Auth Token: " AUTH_TOKEN
    echo ""
    [[ -n "$AUTH_TOKEN" ]] || { echo "An npm login or token is required." >&2; exit 1; }
fi

if [[ -n "$AUTH_TOKEN" ]]; then
    # Keep credentials out of process arguments and remove the private temporary config on exit.
    PUBLISH_NPMRC="$(mktemp)"
    trap 'rm -f "$PUBLISH_NPMRC"' EXIT
    printf '//registry.npmjs.org/:_authToken=%s\n' "$AUTH_TOKEN" > "$PUBLISH_NPMRC"
    export NPM_CONFIG_USERCONFIG="$PUBLISH_NPMRC"
fi

unset AUTH_TOKEN
npm whoami >/dev/null

if [[ "$RETRY" == false ]]; then
    npm run version:blocks -- "$BUMP"
fi

npm run build:blocks

# npm uses publishConfig.tag from the built package; beta releases do not replace latest.
(cd dist/blocks && npm publish --access public)

echo "Build and publish completed successfully."
