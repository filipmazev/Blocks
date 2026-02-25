#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Prompt the user for the NPM auth token securely (input is hidden)
read -s -p "Enter NPM Auth Token: " AUTH_TOKEN
echo ""
echo "Starting build and publish pipeline..."

# 1. Identify all middle projects
# Read directories in the projects/ folder, excluding the known ones
MIDDLE_PROJECTS=()
for dir in projects/*/; do
    # Extract just the folder name
    PROJ_NAME=$(basename "$dir")
    
    if [[ "$PROJ_NAME" != "blocks-core" && "$PROJ_NAME" != "blocks" && "$PROJ_NAME" != "playground" ]]; then
        MIDDLE_PROJECTS+=("$PROJ_NAME")
    fi
done

echo "Detected middle projects: ${MIDDLE_PROJECTS[*]}"
echo "---------------------------------------------------"

# 2. Build and publish blocks-core
echo "Building blocks-core..."
ng build blocks-core
cd dist/blocks-core
echo "Publishing blocks-core..."
npm publish --access public --//registry.npmjs.org/:_authToken=$AUTH_TOKEN
cd ../../

# Clear cache and install the latest blocks-core
echo "Cleaning cache and installing @filip.mazev/blocks-core@latest..."
npm cache clean --force
npm i @filip.mazev/blocks-core@latest

echo "---------------------------------------------------"

# 3. Build and publish all middle projects dynamically
for PROJ in "${MIDDLE_PROJECTS[@]}"; do
    echo "Building $PROJ..."
    ng build "$PROJ"
    
    cd dist/"$PROJ"
    echo "Publishing $PROJ..."
    npm publish --access public --//registry.npmjs.org/:_authToken=$AUTH_TOKEN
    cd ../../
done

echo "---------------------------------------------------"

# 4. Prepare for the final 'blocks' build
# Construct the npm install string for all middle projects
INSTALL_STRING=""
for PROJ in "${MIDDLE_PROJECTS[@]}"; do
    INSTALL_STRING="$INSTALL_STRING @filip.mazev/$PROJ@latest"
done

echo "Cleaning cache and installing middle projects: $INSTALL_STRING"
npm cache clean --force
# Run the command without quotes around $INSTALL_STRING so npm reads it as separate arguments
npm i $INSTALL_STRING

# 5. Build and publish blocks
echo "Building blocks..."
ng build blocks

cd dist/blocks
echo "Publishing blocks..."
npm publish --access public --//registry.npmjs.org/:_authToken=$AUTH_TOKEN
cd ../../

echo "---------------------------------------------------"
echo "Pipeline completed successfully! 🎉"