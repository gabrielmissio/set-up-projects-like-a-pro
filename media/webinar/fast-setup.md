# 🚀 Fast setup

## 💡 The Quickest Way (Recommended)

If you want to set up everything automatically, just run:

```Bash
npx cloud-crafter-cli run quickstart-js
```

This command will handle all steps for you—creating necessary files, installing dependencies, and configuring ESLint, Husky, and Lint-staged.
After running it, you're ready to go! 🎉

## 🔧 Manual Setup (Step-by-Step)

If you prefer a hands-on approach, follow these steps:

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
  "*.js": "npm run lint -- --fix"
}' > .lintstagedrc

npx husky add .husky/pre-commit "npx lint-staged"
```
