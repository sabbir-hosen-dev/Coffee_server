# Coffee Server

This project is a backend server for managing a coffee inventory using **Node.js**, **Express.js**, and **MongoDB**. It provides RESTful APIs for performing CRUD (Create, Read, Update, Delete) operations on coffee data.

---

## Features

- **Retrieve all coffee items**: Fetch all coffee entries stored in the database.
- **Retrieve a single coffee item**: Fetch details of a specific coffee item using its unique ID.
- **Add a new coffee item**: Add a new coffee entry to the database.
- **Update coffee details**: Update the details of an existing coffee entry.
- **Delete a coffee item**: Remove a coffee entry from the database.


## API Endpoints

### 1. Get All Coffees
- **URL**: `/coffees`
- **Method**: `GET`
- **Description**: Retrieve all coffee items.

### 2. Get Coffee by ID
- **URL**: `/coffees/:id`
- **Method**: `GET`
- **Description**: Retrieve a specific coffee item using its unique ID.

### 3. Add a New Coffee
- **URL**: `/coffees`
- **Method**: `POST`
- **Description**: Add a new coffee entry to the database.

### 4. Update Coffee Details
- **URL**: `/coffees/:id`
- **Method**: `PUT`
- **Description**: Update an existing coffee entry using its unique ID.

### 5. Delete a Coffee
- **URL**: `/coffee/:id`
- **Method**: `DELETE`
- **Description**: Remove a coffee entry using its unique ID.

---

## Dependencies

- `express`: Web framework for Node.js.
- `cors`: Middleware to handle cross-origin requests.
- `dotenv`: Environment variable management.
- `mongodb`: MongoDB database driver.
