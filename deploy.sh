#/usr/bin/env bash

set -e # exit immediately if a command exits with a non-zero status.

current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "master" ]; then
    echo "Error: You must be on the 'master' branch to deploy."
    exit 1
fi

# Check for unstaged changes
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "Error: Please commit or stash unstaged changes before deploying."
    exit 1
fi

latest_commit=$(git rev-parse HEAD)

echo "Building the project..."
lein clean
lein fig:build

temp_dir=$(mktemp -d)
cp -r ./resources/public/* $temp_dir

# Checkout to the orphan branch, crete if not exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "Switching to the existing 'gh-pages' branch..."
    git checkout gh-pages
else
    echo "Creating a new orphan 'gh-pages' branch..."
    git checkout --orphan gh-pages
fi

echo "Adding files to the staging area..."
git --work-tree=$temp_dir add .

echo "Committing changes..."
git commit -m "Deploy $latest_commit"

echo "Pushing to the 'gh-pages' branch on origin..."
git push origin gh-pages

echo "Switching back to the '$current_branch' branch..."
git checkout -f "$current_branch"

echo "Deployment completed successfully!"
