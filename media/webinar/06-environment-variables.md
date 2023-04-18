# Environment Variables

Environment variables are a way to store configuration data outside of your codebase, making it easier to deploy your app to different environments without modifying your source code.

To use environment variables in your Node.js app, you can access them using the process.env object.

For example, if you have an environment variable named DATABASE_URL, you can access its value like this:

```Javascript
const databaseUrl = process.env.DATABASE_URL;
```

To set environment variables, you can use the command line or a .env file.

## The .env File

The .env file is a simple text file that contains key-value pairs of environment variables. It is not meant to be checked into version control, as it may contain sensitive information like passwords and API keys.

To use the .env file in your app, you can use the dotenv library. dotenv reads the contents of your .env file and sets the environment variables automatically.

To use .env file in your project, you need to install it dotenv as a development dependency:

```Bash
npm install -D dotenv
```

For example, if you have the following .env file:


```
DATABASE_URL=mongodb://localhost/mydatabase
API_KEY=1234567890abcdef
```

You can load its contents in your Node.js app like this:

```Javascript
if (process.env.IS_LOCALHOST) require('dotenv').config();
```

After this call, you can access the variables from the process.env object as usual:

## Why Ignore .env Files?
It is important to add .env files to your .gitignore file to avoid accidentally committing sensitive information to your version control system.

For example, if you accidentally commit an .env file that contains a database password, that password could be exposed to everyone who has access to the repository.

By adding .env files to your .gitignore file, you can ensure that they are not accidentally committed to your repository.
