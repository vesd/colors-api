# colors-api

An Express-based back-end service that interacts with a MySQL database to create, delete and list colors.

## Features

- uses ts-node-dev to restart the app on file changes

## How to run

Rename `.env-sample` to `.env` and set your MySQL database credentials

```javascript
nvm use 14
npm install
docker-compose up --build
```

The API endpoints are served from [http://localhost:3000](http://localhost:3000)
