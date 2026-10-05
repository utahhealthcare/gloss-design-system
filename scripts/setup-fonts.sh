#!/usr/bin/env bash
set -euo pipefail

# Navigate to project root
cd "$(dirname "$0")/.."

export GIT_SSH_COMMAND="${GIT_SSH_COMMAND:-ssh}"

TARGET_DIR="assets-private/brand-fonts"
REPO_URL="${GLOSS_FONTS_REPO:-git@github.com:utahhealthcare/gloss-fonts.git}"

echo "=========================================="
echo " Setting up Gloss Brand Fonts"
echo "=========================================="

if [ -d "$TARGET_DIR/.git" ]; then
    echo "==> Updating gloss-fonts in $TARGET_DIR..."
    git -C "$TARGET_DIR" pull --ff-only || {
        echo "==> Notice: git pull failed; continuing with existing clone in $TARGET_DIR."
    }
else
    mkdir -p "assets-private"
    echo "==> Cloning gloss-fonts into $TARGET_DIR..."
    if ! git clone "$REPO_URL" "$TARGET_DIR"; then
        echo "==> SSH clone failed; attempting HTTPS clone..."
        git clone "https://github.com/utahhealthcare/gloss-fonts.git" "$TARGET_DIR"
    fi
fi

echo "=========================================="
echo " Gloss brand fonts setup complete!"
echo "=========================================="
