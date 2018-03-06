# mongoose-crud
CRUD with Mongoose ODM


## CRUD BOOK

List of book routes:

| Route     | HTTP   | Description                     |
|-----------|:------:|--------------------------------:|
|/books/    | GET    | Get all the books               |
|/books/:id | GET    | Get a single book               |
|/books/    | POST   | Create a book                   |
|/books/:id | PUT    | Update a new book with new data |
|/books/:id | DELETE | Delete a book                 |


## Usage
```
Access the API via `http://localhost:3000/books`
```


## CRUD Customer

List of customer routes:

| Route         | HTTP   | Description                         |
|---------------|:------:|------------------------------------:|
|/customers/    | GET    | Get all the customers               |
|/customers/:id | GET    | Get a single customer               |
|/customers/    | POST   | Create a customer                   |
|/customers/:id | PUT    | Update a new customer with new data |
|/customers/:id | DELETE | Delete a customer                   |


## Usage
```
Access the API via `http://localhost:3000/customers`
```


## CRUD Transaction

List of transaction routes:

| Route            | HTTP   | Description                       |
|------------------|:------:|----------------------------------:|
|/transactions/    | GET    | Get all the transactions          |
|/transactions/    | POST   | Create a transaction              |
|/transactions/:id | GET    | get a transaction for return book |


## Usage
```
Access the API via `http://localhost:3000/transactions`
```