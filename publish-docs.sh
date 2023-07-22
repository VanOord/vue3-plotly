#!/usr/bin/env sh

set -e

cp docs/static/index.html dist/gh-pages/
cd dist/gh-pages

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:clalarco/vue3-plotly.git main:gh-pages

