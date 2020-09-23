#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .
git commit -m 'document commit'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f https://github.com/thinkingc/vuepress-docs.git master

cd -