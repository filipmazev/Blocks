#!/bin/bash

set -e

AUTH_TOKEN=""

# 1. Parse command line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --token) AUTH_TOKEN="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done

# 2. Fallback to prompt if token wasn't provided
if [ -z "$AUTH_TOKEN" ]; then
  read -s -p "Enter NPM Auth Token: " AUTH_TOKEN
  echo ""
fi

echo "🚀 Starting Simplified Publish Pipeline..."

# 3. Update the version
echo "Step 1: Bumping version..."
npm version patch --prefix projects/blocks --no-git-tag-version

# 4. Run the build
echo "Step 2: Building @filip.mazev/blocks..."
npm run build:blocks

# 5. Publish the consolidated package
echo "Step 3: Publishing to NPM..."
cd dist/blocks

npm publish --access public --//registry.npmjs.org/:_authToken=$AUTH_TOKEN

echo "---------------------------------------------------"
echo "✅ Build and Publish completed successfully! 🎉"
echo "Package @filip.mazev/blocks is now live."
