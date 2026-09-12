#!/bin/bash
# Rychlý commit + push pro projekt Dum Liberec.
# Použití: dl-push "commit message"
# Bez zprávy pouzije defaultní "Update docs".

set -e

REPO_DIR="/Users/josefkubinek/Library/CloudStorage/OneDrive-Osobní/AI/Dum Liberec"
MSG="${1:-Update docs}"

cd "$REPO_DIR"

git add -A
git commit -m "$MSG"
git push origin main

echo "✓ Pushnuto: $MSG"
