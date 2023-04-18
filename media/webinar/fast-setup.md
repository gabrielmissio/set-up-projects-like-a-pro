# Fast setup

1. Create a new package. Create .gitignore file. Add "node_modules" folder to .gitinore. Install ESLint, Husky and Lint-staged as devDependencies

```Bash
npm init -y

touch .gitignore
echo 'node_modules' > .gitignore

npm i -D eslint husky lint-staged
```

2. Initialize eslint configuration

```Bash
npm init @eslint/config
```

3. Add "lint" and "prepare" scripts to package.json scripts. Setup Lint-staged. Setup Husky "pre-commit" git hook.

```Bash
npm pkg set scripts.lint="npx eslint"
npm pkg set scripts.prepare="husky install"

touch .lintstagedrc
echo '{
  "*.js": "npm run lint"
}' > .lintstagedrc

npm run prepare
npx husky add .husky/pre-commit "npx lint-staged"
```