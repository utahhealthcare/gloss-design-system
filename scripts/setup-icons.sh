#!/usr/bin/env bash
set -euo pipefail

# Navigate to project root
cd "$(dirname "$0")/.."

export GIT_SSH_COMMAND="${GIT_SSH_COMMAND:-ssh}"

TARGET_DIR="assets-private/brand-icons"
REPO_URL="${GLOSS_ICONS_REPO:-git@github.com:utahhealthcare/gloss-icons.git}"

echo "=========================================="
echo " Setting up Gloss Icons"
echo "=========================================="

if [ -d "$TARGET_DIR/.git" ]; then
    echo "==> Updating gloss-icons in $TARGET_DIR..."
    git -C "$TARGET_DIR" pull --ff-only || {
        echo "==> Notice: git pull failed; continuing with existing clone in $TARGET_DIR."
    }
else
    mkdir -p "assets-private"
    echo "==> Cloning gloss-icons into $TARGET_DIR..."
    if ! git clone "$REPO_URL" "$TARGET_DIR"; then
        echo "==> SSH clone failed; attempting HTTPS clone..."
        git clone "https://github.com/utahhealthcare/gloss-icons.git" "$TARGET_DIR"
    fi
fi

echo "==> Installing dependencies in $TARGET_DIR..."
(cd "$TARGET_DIR" && (npm ci || npm install))

echo "==> Building icons in $TARGET_DIR..."
(cd "$TARGET_DIR" && npm run build)

echo "=========================================="
echo " Gloss icons setup and build complete!"
echo "=========================================="
