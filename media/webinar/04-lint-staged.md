# Lint-staged

Lint-staged is a tool that allows you to run linters on specific files that you've staged in Git. This is particularly useful when working with a large codebase, as it enables you to focus on only the files that you've changed, and ensure that the code you commit is of high quality.

To use Lint-staged in your project, you need to install it as a development dependency:

```Bash
npm install -D lint-staged
```

After installing Lint-staged, let's create a ".lintstagedrc" file to keep Lint-staged config:

```Bash
npm pkg set scripts.lint="npx eslint"
touch .lintstagedrc
echo '{
  "*.js": "npm run lint"
}' > .lintstagedrc
```