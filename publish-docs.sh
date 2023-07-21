#!/usr/bin/env sh

set -e

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:clalarco/vue3-plotly.git main:gh-pages

