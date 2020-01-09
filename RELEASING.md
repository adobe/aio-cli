## 1. Update your plugins

```
rm -rf node_modules
npm install
npm outdated @adobe/aio-cli-plugin-console @adobe/aio-cli-plugin-jwt-auth @adobe/aio-cli-plugin-config @adobe/aio-cli-plugin-runtime @adobe/aio-cli-plugin-certificate @adobe/aio-cli-plugin-auth @adobe/aio-cli-plugin-app
``` 

If there is a `major` version update in any of the plugins, only update the `major` version of the CLI.
Else if there is a `minor` version update in any of the plugins, only update the `minor` version of the CLI.
Else if there is a `patch` version update in any of the plugins, only update the `patch` version of the CLI.

Update the updated module(s). For example, if it was the console plugin:
```
npm install @adobe/aio-cli-plugin-console@latest --save
```

## 2. Test with the updated modules (if any)

```
npm test
```

## 3. Increment a version

```
npm --no-git-tag-version version [major | minor | patch]
# get the package.json version in a variable
export PKG_VER=`node -e "console.log(require('./package.json').version)"`
```
## 4. Commit the changed files
```
git commit -m "Incremented version to $PKG_VER" package.json package-lock.json README.md
```

## 5. Tag a version

```
git tag $PKG_VER
```

## 6. Push version and tag

```
git push origin master
git push origin $PKG_VER
```

## 7. publish to npm

```
npm publish
```

## 8. prepare the next pre-release

```
npm --no-git-tag-version version prerelease --preid=dev
git add . 
git commit -m "bumped master prerelease"
git push origin master
```

