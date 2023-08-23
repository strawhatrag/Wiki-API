# Backend Wiki API App

This repository contains a minimalist Express.js application that serves as a backend API for a wiki-like system. The app is built solely for handling data and interactions on the server side, without any front-end components. It employs MongoDB as the database for storing articles and their content.

## Features

- **Database Configuration:** The app uses MongoDB to store article data. Mongoose is employed as an Object-Document Mapping (ODM) library to interact with the MongoDB database.

- **Routing and API Endpoints:** The app defines various API endpoints to perform CRUD (Create, Read, Update, Delete) operations on articles.

- **Express Middleware:** The application utilizes Express middleware to parse incoming data, enable static file serving, and set up the EJS view engine.

## API Endpoints

### Get All Articles

- **URL:** `/articles`
- **HTTP Method:** GET
- **Description:** Retrieves a list of all articles stored in the database.

### Create an Article

- **URL:** `/articles`
- **HTTP Method:** POST
- **Description:** Creates a new article with the provided title and content.

### Delete All Articles

- **URL:** `/articles`
- **HTTP Method:** DELETE
- **Description:** Deletes all articles from the database.

### Get Article by Title

- **URL:** `/articles/:articleTitle`
- **HTTP Method:** GET
- **Description:** Retrieves a specific article based on the provided article title.

### Update Article (PUT)

- **URL:** `/articles/:articleTitle`
- **HTTP Method:** PUT
- **Description:** Updates a specific article with new title and content using the provided article title.

### Partially Update Article (PATCH)

- **URL:** `/articles/:articleTitle`
- **HTTP Method:** PATCH
- **Description:** Updates a specific article's title using the provided article title.

### Delete Article by Title

- **URL:** `/articles/:articleTitle`
- **HTTP Method:** DELETE
- **Description:** Deletes a specific article based on the provided article title.

## Usage

1. Install the necessary dependencies using `npm install`.

2. Configure your MongoDB connection by setting the appropriate URL in the `mongoose.connect()` function.

3. Run the application using `node app.js`.

4. Access the API endpoints using a tool like Postman or through code.

## Note

This application focuses solely on the backend functionality of a wiki-like system, providing API endpoints to manage articles. There is no front-end interface included in this version.
