# Git Hooks

Git Hooks are scripts that run automatically whenever a particular Git event occurs, such as committing or pushing changes. They allow you to automate certain tasks and enforce code quality standards.

One popular library for managing Git Hooks is Husky. Husky provides an easy-to-use interface for setting up hooks, and it comes preconfigured with several commonly used hooks, such as the pre-commit hook.

To use Husky in your project, you need to install it as a development dependency:

```Bash
npm install -D husky
```

After installing Husky, let's add an "prepare" script in your package.json:

```Bash
npm pkg set scripts.prepare="husky install"
npm run prepare
```

Now, let's add an "prepare" script in your package.json:

```Bash
npm pkg set scripts.prepare="husky install"
npm run prepare
```

Finnaly, it's time to setup your "pre-commit" hook

```Bash
npx husky add .husky/pre-commit "npx eslint ."
```
