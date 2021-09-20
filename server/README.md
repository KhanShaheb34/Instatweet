# Instatweet Server

Created using ExpressJS and Sequelize

## Run the project

You can run the project in these ways:

### Docker

At first build the container using:

```sh
docker build -t itserver .
```

Then run the docker image using:

```sh
docker run -p 8000:8000 \
-e DB_URI=database_uri \
-e DB_SETUP=true/false \
-e JWT_SECRET=jwt_secret \
-e NODE_ENV=docker/production/development \
itserver
```

### Development Server

```sh
npm install
```

Installs all of the required packages to run the project

```sh
npm run dev
```

Runs the app in the development mode.
