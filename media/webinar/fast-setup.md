# Fast setup

```Bash
touch .gitignore
echo 'node_modules' > .gitignore

npm pkg set scripts.lint="npx eslint"
touch .lintstagedrc
echo '{
  "*.js": "npm run lint"
}' > .lintstagedrc

npm i -D eslint lint-staged
npm init @eslint/config
```

```Bash
npm i -D husky
npm pkg set scripts.prepare="husky install"
npm run prepare
npx husky add .husky/pre-commit "npx lint-staged"
```