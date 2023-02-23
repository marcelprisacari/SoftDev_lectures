# REACT

-   Created by Facebook
-   Is a client-side JS library
-   Quickly renders on the page
-   Companies transitioning more to React:
    -   Netflix, Uber, Dropbox, AirBnB
-   Works through **Components**

# JSX

-   JSX is JavaScript syntax that returns HTML
    1. **Must** export for it to be used.
    2. **Must** be imported to be used.
    3. **Must** be mounted to be used.
    4. **Must** only return **ONE** JSX element.

# Starting a REact App

`npx create-react-app .` or `npx create-react-app aoo-name`

-   "." indicates the folder as the project name
-   "app-name" will generate a new folder with the project details within it.

## Points of Interest

-   public
    -   `index.html`: What is displayed to the browser.
-   src
    -   `index.js`: JavaScript being rendred to `index.html`.
    -   `App.js`: Main point where components are mounted. This is being rendere within `index.js`

```js
/* 
  - Create a new folder called aboutme within the components folder.
  - Create a new file inside the folder called AboutMe.jsx.
  - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/
```

# React Fragment

-   Reduces the Nodes within the DOM

```jsx
  <React.Fragment></React.Fragment>
  // or
  <></>
```

-   Common Practice:
    -   If it is a <div> without styling, just use a fragment.

# Props

-   Stands for Properties
-   Cannot be passed to sibling components
-   Sent through mounted components.
