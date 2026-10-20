#!/usr/bin/env bash
set -euo pipefail

# Navigate to the project root directory regardless of invocation location
cd "$(dirname "$0")/.."

echo "=========================================="
echo " Running CI Checks Locally (ci.yml)"
echo "=========================================="

echo "==> [1/9] Installing dependencies (npm ci)..."
# npm ci

echo "==> [2/9] Checking formatting (npm run format)..."
npm run format

echo "==> [3/9] Linting JavaScript and Sass (npm run lint)..."
npm run lint

echo "==> [4/9] Testing token generator (npm run test:tokens)..."
npm run test:tokens

echo "==> [5/9] Checking generated tokens (npm run check:tokens)..."
npm run check:tokens

echo "==> [6/9] Checking generated UIkit documentation (npm run check:uikit-docs)..."
npm run check:uikit-docs

echo "==> [7/9] Checking generated changelog (npm run check:changelog)..."
npm run check:changelog

echo "==> [8/9] Building documentation and distribution files (npm run build:docs)..."
npm run build:docs

echo "==> [9/9] Verifying tracked generated files (git diff --exit-code)..."
git diff --no-ext-diff --exit-code -- dist/ docs/

echo "=========================================="
echo " All CI checks passed successfully!"
echo "=========================================="
