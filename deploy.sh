#!/usr/bin/env sh

set -e

#update version
npm run docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:yourname/yourlibrary.git master:gh-pages

# TAG repo

npm publish --access=public

cd -
