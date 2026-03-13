#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
PROFILE="fireking5997-blog"

# ── Build ──
echo "🔨 Building..."
cd "$PROJECT_DIR"
pnpm build

# ── Deploy ──
cd "$SCRIPT_DIR"
BUCKET=$(terraform output -raw bucket_name)
CF_DIST_ID=$(terraform output -raw cloudfront_distribution_id)

echo "🚀 Deploying to s3://$BUCKET ..."
aws s3 sync "$PROJECT_DIR/dist" "s3://$BUCKET" \
  --delete \
  --profile "$PROFILE" \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html" \
  --exclude "app-icon.png"

aws s3 cp "$PROJECT_DIR/dist/index.html" "s3://$BUCKET/index.html" \
  --profile "$PROFILE" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html"

aws s3 cp "$PROJECT_DIR/dist/app-icon.png" "s3://$BUCKET/app-icon.png" \
  --profile "$PROFILE" \
  --cache-control "public, max-age=86400" \
  --content-type "image/png"

echo "♻️  Invalidating CloudFront..."
aws cloudfront create-invalidation \
  --distribution-id "$CF_DIST_ID" \
  --paths "/*" \
  --profile "$PROFILE" \
  --no-cli-pager

CF_DOMAIN=$(terraform output -raw cloudfront_domain)
echo "✅ Deployed: https://$CF_DOMAIN"
