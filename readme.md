# nodemon-watch-issue

Nodemon doesn't restart when it's running inside a Docker container and files are changed from the host machine. Basically a typical dev setup where you're editing files from your host machine, but the app is running inside a Docker container.

Running:

- Docker version 19.03.13, build 4484c46d9d
- docker-compose version 1.27.4, build 40524192

## Reproduce

1. Start the container

```
npm install
docker-compose up -d
docker logs -f nodemon-watch-issue-app
```

2. Change a file from your host machine. nodemon doesn't restart the app.

## Legacy Watch

If you switch to using legacy watch, it works. Edit `docker-compose.yml` and change `command: "npm run start"` to `command: "npm run start:legacy"`. Restart the container, change a file. You should see nodemon restart the app.
