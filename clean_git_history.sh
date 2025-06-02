#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

echo "🔧 Starting to clean Git history and retain current working directory state..."

# Step 1: Backup current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)
backup_branch="backup-$(date +%Y%m%d-%H%M%S)"
git branch "$backup_branch"
echo "✅ Backup created: $backup_branch"

# Step 2: Create orphan branch
git checkout --orphan temp-clean
echo "✅ Orphan branch 'temp-clean' created"

# Step 3: Add all files and commit
git add -A
git commit -m "Initial clean commit"
echo "✅ Clean commit created"

# Step 4: Delete original branch
git branch -D "$current_branch"
echo "🗑️ Original branch '$current_branch' deleted"

# Step 5: Rename new branch to original name
git branch -m "$current_branch"
echo "📛 New branch renamed to '$current_branch'"

# Step 6: Force push to remote
echo "⚠️ Ready to force push to origin/$current_branch (this will overwrite history)"
read -p "Do you want to proceed with the force push? (yes/no): " confirm
if [[ "$confirm" == "yes" ]]; then
  git push -f origin "$current_branch"
  echo "🚀 Force push completed successfully"
else
  echo "❌ Force push aborted"
fi
