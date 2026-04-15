#!/bin/bash

set -e

read -s -p "Enter NPM Auth Token: " AUTH_TOKEN
echo ""

echo "🚀 Starting Simplified Publish Pipeline..."

# 1. Update the version
# This updates projects/blocks/package.json
echo "Step 1: Bumping version..."
npm version patch --prefix projects/blocks --no-git-tag-version

# 2. Run the build
# This triggers: version-sync.mjs -> ng build blocks
echo "Step 2: Building @filip.mazev/blocks..."
npm run build blocks

# 3. Publish the consolidated package
echo "Step 3: Publishing to NPM..."
cd dist/blocks

npm publish --access public --//registry.npmjs.org/:_authToken=$AUTH_TOKEN

echo "---------------------------------------------------"
echo "✅ Build and Publish completed successfully! 🎉"
echo "Package @filip.mazev/blocks is now live."