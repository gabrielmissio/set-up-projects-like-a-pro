# Fast setup

1. Create package.json. ("y" flag tells the generator to use the defaults instead of asking questions.)
2. Create .gitignore file.
3. Add "node_modules" to .gitinore.
4. Install ESLint, Husky and Lint-staged as devDependencies

```Bash
npm init -y

touch .gitignore
echo 'node_modules' > .gitignore

npm i -D eslint husky lint-staged
```

5. Initialize eslint configuration

```Bash
npm init @eslint/config
```

6. Add "lint" and "prepare" scripts to package.json scripts.
7. Setup Lint-staged.
8. Setup Husky "pre-commit" git hook.

```Bash
npm pkg set scripts.lint="npx eslint"
npx husky init
touch .lintstagedrc
echo '{
  "*.js": "npm run lint"
}' > .lintstagedrc

npx husky add .husky/pre-commit "npx lint-staged"
```
