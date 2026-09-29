#!/usr/bin/env bash
set -euo pipefail

# Navigate to the project root directory regardless of invocation location
cd "$(dirname "$0")/.."

echo "=========================================="
echo " Running CI Checks Locally (ci.yml)"
echo "=========================================="

echo "==> [1/8] Installing dependencies (npm ci)..."
# npm ci

echo "==> [2/8] Checking formatting (npm run format)..."
npm run format

echo "==> [3/8] Linting JavaScript and Sass (npm run lint)..."
npm run lint

echo "==> [4/8] Testing token generator (npm run test:tokens)..."
npm run test:tokens

echo "==> [5/8] Checking generated tokens (npm run check:tokens)..."
npm run check:tokens

echo "==> [6/8] Checking generated UIkit documentation (npm run check:uikit-docs)..."
npm run check:uikit-docs

echo "==> [7/8] Building documentation and distribution files (npm run build:docs)..."
npm run build:docs

echo "==> [8/8] Verifying tracked generated files (git diff --exit-code)..."
git diff --no-ext-diff --exit-code -- dist/ docs/

echo "=========================================="
echo " All CI checks passed successfully!"
echo "=========================================="
