#Getting Started

-   create a `package.json`
    -   In the terminal ~ cli command: `npm init -y`
-   Install dependencies
    -   express: `npm i express`
-   Create a `.gitignore` file
-   `/node_modules` within .gitignore files
    -   tells our local repo to ignore the `node_modules` folder when backing up
-   node_modules folder
    -   Provdes us access to any "behind the scene" code that helps run express and any other dependency.
-   package-lock-json
    -   locks project into required dependencies. helps with our versioning.
    -   updated our `package.json` with `"main": "app.js` instead of `index.js`.
-   Create a root JS file
    -   `index.js` or `app.js`

#CRUD

-   Create: POST
-   Read: GET
-   Update: PUT / PATCH
-   Delete: DELETE

## Postman

-   Set Methods
    -   GET / POST / PUT / DELETE on routes
    -   Body
        -   raw
        -   JSON
            -   make a JSON object

## Preparing our server to handle JSON objects

In our `app.js` we need to have this line of code:

```js
app.use(express.json());
```

This provides us access to JSON throughout our routes.

## MVC

-   Model View Controller
-   Architecture pattern that helps our Separation of Concerns
-   View :
    -   Browser, Postman, etc...
-   Controller:
    -   Part of the server which handle logic.
-   Model:
    -   Database schematic

## Middleware

-   A function that accesses the request and response
-   Has a call stack:
    -   Request
    -   Response
    -   Next

## CORS

-   Cross Origin Resource Sharing
    -   preflight
        -   Checks to see if your request is available
        -   If headers don't match in our requests, it can throw an error
        -   Adding this dependency is to help resolve any of those issues.
-   Dependency
    -   stop server and install as a dependency
    -   `npm i cors`
    -   import within `app.js` above `routes`
