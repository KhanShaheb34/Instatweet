# Instatweet

A twitter clone that looks like instagram but does not have that many features.

![Website Status](https://img.shields.io/website?down_color=red&down_message=down&up_color=green&up_message=up&url=https%3A%2F%2Finstatweet.netlify.app%2F)
![Wakatime Badge](https://wakatime.com/badge/github/KhanShaheb34/Instatweet.svg)

> ### Visit [instatweet.netlify.app](https://instatweet.netlify.app/) to view the application in action!

## Features

Main features of the application

- **Authentication**: Sign Up, Login
- **User**: Profile, Follow, Update
- **Post**: Create, Delete, Like
- **Comment**: Comment on Post, Delete
- **UI**: Responsive, Reactive

## Technologies

<img src="https://img.shields.io/badge/Backend-3F3F3F?style=for-the-badge&logo=plex&logoColor=FFFFFF">![badge-javascript](https://img.shields.io/badge/javascript-211e1b?style=for-the-badge&logo=javascript&logoColor=22C4E1&labelColor=211e1b)![badge-express](https://img.shields.io/badge/expressJS-211e1b?style=for-the-badge&logo=express&logoColor=22C4E1&labelColor=211e1b)![badge-sequelize](https://img.shields.io/badge/sequelize-211e1b?style=for-the-badge&logo=sequelize&logoColor=22C4E1&labelColor=211e1b)![badge-postgresql](https://img.shields.io/badge/postgresql-211e1b?style=for-the-badge&logo=postgresql&logoColor=22C4E1&labelColor=211e1b)![badge-jsonwebtokens](https://img.shields.io/badge/JWT-211e1b?style=for-the-badge&logo=jsonwebtokens&logoColor=22C4E1&labelColor=211e1b)<br />
<img src="https://img.shields.io/badge/Frontend-3F3F3F?style=for-the-badge&logo=plex&logoColor=FFFFFF">![badge-typescript](https://img.shields.io/badge/typescript-211e1b?style=for-the-badge&logo=typescript&logoColor=22C4E1&labelColor=211e1b)![badge-react](https://img.shields.io/badge/reactJS-211e1b?style=for-the-badge&logo=react&logoColor=22C4E1&labelColor=211e1b)![badge-chakraui](https://img.shields.io/badge/chakraui-211e1b?style=for-the-badge&logo=chakraui&logoColor=22C4E1&labelColor=211e1b)![badge-redux](https://img.shields.io/badge/redux-211e1b?style=for-the-badge&logo=redux&logoColor=22C4E1&labelColor=211e1b)![badge-axios](https://img.shields.io/badge/axios-211e1b?style=for-the-badge&logo=andela&logoColor=22C4E1&labelColor=211e1b)<br />
<img src="https://img.shields.io/badge/Devops-3F3F3F?style=for-the-badge&logo=plex&logoColor=FFFFFF">![badge-docker](https://img.shields.io/badge/docker-211e1b?style=for-the-badge&logo=docker&logoColor=22C4E1&labelColor=211e1b)![badge-nginx](https://img.shields.io/badge/nginx-211e1b?style=for-the-badge&logo=nginx&logoColor=22C4E1&labelColor=211e1b)

## Run the project

You can run the project in these ways:

### Docker

Build and build the [docker compose file](docker-compose.yml) using:

```sh
docker-compose build
```

Now run the application by using:

```sh
docker-compose up
```

If you change anything in the source code, please build the [docker compose file](docker-compose.yml) again. And please ensure that port 3000 is unallocated.

The application will start on [http://localhost:3000/](http://localhost:3000/).

> Please keep in mind that, running this project from docker, it will initialize an empty database.

### Run Separately

You can run the frontend or backend separately. The process is documented in each folder.

To run the api server you'll need a postgres database. Please create on and pass it as an environment variable like:

```env
DB_URI=postgres://username:password@host:port/dbname
```

If you run the backend first time in a new database please pass this environment variable:

```env
DB_SETUP=true
```

This will migrate the models to the database.

Additional environment variables you can pass to the project:

```env
JWT_SECRET=jwt_secret
PORT=port
NODE_ENV=development/production
```
