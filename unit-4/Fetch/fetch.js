/* 
! API 
    - Application Programming Interface
    - Client (front end) to communicate with the server (to database)
    - Allow HTTP request and response lifecycle
*/

/* 
! AJAX 
    - Asynchronous JavaScript and XML
    - Wrap XML with XMLHttpRequests -> not important to know right now
    - Governs different aspects of our page, such as static vs dynamic section of our page.
    
    *jQuery
        - A library that helps us handle the front end.
        - Used Prior to DOM and Fetch
        - Still used but dated

    example:
        - timed updates tp comments (replies)
        - infinite scrolling
        - dynamic search results

    - Works through multiple technologies
        - HTML / CSS
        - DOM (Document Object Model)
        - JSON
        - Fetch
        - JS bringin it all together

    - Not Promised based.
*/

/* 
! Fetch
    - Before fetch(), we would have to use an httpRequest through the above noted.
    - Is an API
    - A method requires 1 argument. 
        - location of data (url)
    - Handles the request and response
    - Returns a promise
        - Allows us access to resolvers.
*/

const log = console.log;

const testEndpoint = "https://jsonplaceholder.typicode.com/posts/1";

fetch(testEndpoint)
    // .then(response => log(response)); // object is returned.
    // .then(response => log(response.url)); // view URL in object.
    // .then((response) => log(response.body)); // body of object -> returns a string.

    /* 
    ! JSON
        - JavaScript Object Notation
            - very lightweight for storing and transfering data
            - "easy to understand"

        Syntax:
        {
            "key": "value",
            "key": true,
            "key": 0
        }

        - Everything is wrapped in quotes with minor exceptions (integers / booleans)
        - Data is all separated with commas
        - Cannot hold comments or functions
    */
    .then((response) => response.json()) // "json-ifying our string"
    // .then(data => log(data.)); // looking at "title" within the JSON object
    .then((data) => log(data));

//* JSON.parse(string)
let myText = '{ "name": "Gollum", "lost_ring": true }';
log(myText);
// log(JSON.parse(myText));
let test = JSON.parse(myText);
test.name = "Bilbo";
log(test);
// log(myText);

/* 
The Process:
        1. Fetch your resource which returns a promise
        2. Use a .then() resolver to catch fetches return and assign to a parameter.
        3. Use .json() on response to finish reading entire ReadableStream.
        4. Chained another .then() to catch read response object and ..
        5. Build the rest as needed.
            - DOM manipulation
            - use data to process in other fuctions
            - whatever your project requires.

    Fetch differs from jQuery:
        - The promise returned won't reject HTTP error status even if its'a a 404 or 500 (internal / external server error)
*/

const url = "https://meowfacts.herokuapp.com/";

function getCatFact() {
    fetch(url)
        .then((r) => r.json()) // r stands for response
        .then((d) => log(d.data)); // gets the data from the object created from url above after it was json-ifyed
}

getCatFact();

//* async/await version
const getNewCatFact = async () => {
    let res = await fetch(url);
    let result = await res.json();
    let data = result.data[0];

    log("In Async/Await: ", data);
};

getNewCatFact();

//* Local Fetch
fetch("local.json")
    .then((r) => r.json())
    // .then(d => log(d));
    // .then((d) => log(d.fellowship));
    .then((d) => {
        let members = d.fellowship;

        for (m of members) {
            log(m.name);
        }
    });

// Error Handling
async function getCatFact3() {
    try {
        let response = await fetch(url);
        // let response =  fetch(url); // breaks - used to show the "catch"
        let results = await response.json();
        let data = results.data[0];
        log("Try/Catch: ", data);
    } catch (error) {
        console.error(err);
    }
}
getCatFact3();

//* using resolvers
fetch(url)
    .then((r) => r.json())
    .then((d) => log("Resolver: ", d.data[0]))
    .catch((err) => console.error(err));
