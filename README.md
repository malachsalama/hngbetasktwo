# Simple REST API with Node.js and Express

This is a simple REST API built using Node.js and Express for managing user data with a MongoDB database.

![UML Diagram for the API](./assets/UML.png)

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)

## Introduction

This Node.js and Express REST API allows you to perform basic CRUD (Create, Read, Update, Delete) operations on user data stored in a MongoDB database. You can create, retrieve, update, and delete user records.

## Prerequisites

Before using this API, ensure you have the following prerequisites installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Install and set up MongoDB](https://docs.mongodb.com/manual/installation/)

## Installation

 Clone the repository:
   ```bash
   git clone https://github.com/malachsalama/hngbetasktwo.git
   cd hngbetasktwo
   ```

 Install dependencies:
 ```bash
  npm install
 ```

## Usage
Start the server
  ```bash
    npm start
  ```
You can now use the API to perform CRUD operations on user data

## Endpoints
### Create a User
- URL: /api

- Method: POST

- Request Body:
  ```bash
    {
      "name": "Malach Salama"
    }
  ```
- Response:
  ```bash
  {
    "status": "success",
    "message": "User created successfully",
    "data": {
        "name": "Malach Salama",
        "_id": "650eb215d7db4995db6dc067",
        "createdAt": "2023-09-23T09:38:29.789Z",
        "updatedAt": "2023-09-23T09:38:29.789Z",
        "__v": 0
    }
  } 
  ```

### Retrieve All Users
- URL: /api
- Method: GET
- Response:
  
  ```bash
  {
    "status": "success",
    "message": "Users retrieved successfully!",
    "data": [
        {
            "_id": "650eb215d7db4995db6dc067",
            "name": "Malach Salama",
            "createdAt": "2023-09-23T09:38:29.789Z",
            "updatedAt": "2023-09-23T09:38:29.789Z",
            "__v": 0
        },
        {
            "_id": "650ea9366631049f0ba7e2f4",
            "name": "Mark",
            "createdAt": "2023-09-23T09:00:38.600Z",
            "updatedAt": "2023-09-23T09:41:31.741Z",
            "__v": 0
        }
    ]
  }
  ```

### Retrieve a User by ID
- URL: /api/:id
- Method: GET
- Response:
  ```bash
  {
    "status": "success",
    "message": "User retrieved successfully!",
    "data": {
        "_id": "650ea9366631049f0ba7e2f4",
        "name": "Mark",
        "createdAt": "2023-09-23T09:00:38.600Z",
        "updatedAt": "2023-09-23T09:41:31.741Z",
        "__v": 0
    }
  }
  ```


### Update a User by ID
- URL: /api/:id
- Method: PUT
- Request Body:
  ```bash
  {
  "name": "Updated name"
  }
  ```
- Response:
  ```bash
  {
    "status": "success",
    "message": "User updated successfully!",
    "data": {
        "_id": "650ea9366631049f0ba7e2f4",
        "name": "Updated name",
        "createdAt": "2023-09-23T09:00:38.600Z",
        "updatedAt": "2023-09-23T09:49:32.300Z",
        "__v": 0
    }
  }
  ```

### Delete a User by ID
- URL: /api/:id
- Method: DELETE
- Response:
  ```bash
  {
    "status": "success",
    "message": "User deleted successfully!",
    "data": {
        "_id": "650ea9366631049f0ba7e2f4",
        "name": "Mark Essien",
        "createdAt": "2023-09-23T09:00:38.600Z",
        "updatedAt": "2023-09-23T09:49:32.300Z",
        "__v": 0
    }
  }
  ```


## Contributing
Contributions are welcome! If you would like to contribute to this project, please open an issue or submit a pull request.
