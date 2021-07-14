# download-git-repo
Download and extract a git repository (GitHub, GitLab, Bitbucket) from node.

## API
#### download(repository, destination, options, callback)
Download a git repository to a destination folder with options, and callback.

## 例子
Using git clone from direct url at my-branch.
```js
download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git#my-branch', 'test/tmp', { clone: true }, function (err) {
  console.log(err ? 'Error' : 'Success')
})
```

## 参考
[download-git-repo](https://www.npmjs.com/package/download-git-repo)