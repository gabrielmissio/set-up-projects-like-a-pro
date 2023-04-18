# NPM (Node Package Manager)

NPM is a package manager for the JavaScript ecosystem. It allows you to install, manage, and share packages of JavaScript code that can be used in Node.js projects. You can use it to manage dependencies, run scripts, and define important project details.

The `package.json` file is the heart of every Node.js project, and it's used by NPM to install and manage dependencies. Here are some important details that you should define in your `package.json` file:

- **Name**: The name of your project.
- **Version**: The current version of your project.
- **Description**: A brief description of your project.
- **Dependencies**: The list of packages that your project depends on to work properly.
- **DevDependencies**: The list of packages that are only needed during development, such as testing frameworks and linters.

To create a "package.json" file for your project, you can run the following command in your project directory:

```Bash
npm init
```

To install dependencies listed in the "package.json" file, you can run the following command:

```Bash
npm install
```

This command will download and install all dependencies listed in the "dependencies" and "devDependencies" sections of the "package.json" file

To install only "dependencies" you can run the following command:

```Bash
npm install --production --no-optional
```
