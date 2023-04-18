# Linting

Linting is the process of analyzing the code for potential errors, coding style violations, and other issues. It can be done manually or using automated tools called "linters".

In JavaScript, the most popular linter is ESLint. It is a pluggable linting utility that allows you to customize the rules and plugins to suit your project's needs.

ESLint comes with a set of default rules that cover common mistakes and best practices. You can also configure ESLint to use plugins that provide additional rules for specific frameworks or libraries.

To use ESLint in your project, you need to install it as a development dependency:

```Bash
npm install -D eslint
```

After installing ESLint, you need to create a configuration file named .eslintrc. This file contains the rules and plugins that you want to use for your project. You can create this file manually or by running the following command:

```Bash
npm init @eslint/config
```

It will guide you through a series of questions to help you configure your .eslintrc file.

Once you have created your .eslintrc file, you can run ESLint on your JavaScript files using the following command:

```Bash
npx eslint demo-file.js
```

ESLint will analyze your code and report any errors or warnings that it finds. You can also configure ESLint to automatically fix some of the issues that it finds by running the following command:

```Bash
npx eslint demo-file.js --fix
```

This will fix the issues that ESLint can automatically fix and report the remaining issues.

By using ESLint in your project, you can ensure that your code is consistent, follows best practices, and is free from common errors and bugs.

ESLint config demo

![image](../img/eslint-setup.png)
