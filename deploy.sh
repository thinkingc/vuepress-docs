#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 新设备时必须
git init
git config user.name "thinkingc"
git config user.email "2407606301@qq.com"
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
# git push -f https://github.com/thinkingc/thinkingc.github.io.git master
git push -f git@github.com:thinkingc/thinkingc.github.io.git master

cd -