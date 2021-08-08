#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .
if [ $1 != '' ]
then
  git commit -m $1 # bash gipush.sh xxx
else
  git commit -m 'document commit'
fi

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
# git push -f https://github.com/thinkingc/vuepress-docs.git master
git push -f git@github.com:thinkingc/vuepress-docs.git master

cd -