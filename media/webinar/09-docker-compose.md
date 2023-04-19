# Docker Compose

Docker Compose is a tool that allows you to define and run multi-container Docker applications. With Docker Compose, you can configure and start multiple containers that are part of your application, and manage their dependencies and networking.

## Running a local development database with Docker Compose

One common use case for Docker Compose is running a local development database. For example, if your application uses MongoDB, you can use Docker Compose to start a MongoDB container and connect your application to it.

To do this, you need to create a docker-compose.yml file in the root directory of your project. Here's an example configuration for a MongoDB container:

```Yml
version: '3.1'

services:
  mongo:
    image: mongo
    restart: always
    ports:
      - 27017:27017
```

In this configuration, we define a service called mongodb, which uses the mongo image from Docker Hub. We also specify that the container should always be restarted if it fails (restart: always), and we map the container's port 27017 to the host's port 27017 (ports: - '27017:27017').

To start the container, run the following command in the same directory as your docker-compose.yml file:

```Bash
docker-compose up
```

This will start the MongoDB container and output its logs to the console. You can stop the container by pressing Ctrl+C.
