# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm install`

First time, you will need to install all related packages for making app working

## List page -> I have created home.js as a list page where I have used two components

Header -> This is common Header component which I created using html/css/bootstrap.
In design we have two different header, which I handled simply using states.
This is resuable component. We can further modify it as per needed.

Bootstrap => Bootstrap classes I have used to making UI responsive, This is best responsive library available for creating small small responsive component or we can directly use there basic components in our code.
Bootstrap library is not very heavy library so bundle size will be small.

Card (Details page, movie card ) -> I have used bootstrap card for displaying responsive movie card.
Which have simple html tags and few bootstrap classes.
This card is purely reusable, responsive and I have not created seprated card for movie detail, same
card I have utilize for detial page using states.

List Page scrolling (IntersectionObserver Api)-> For implementing infinite scrolling I have used "IntersectionObserver", This is a modern concept for handling infinite scrolling. I have not used react-scroll library, for removing extra dependency and sometime libraries are not updated which create bondation in React version update.

Search Movie (Debounce)-> For searching movie I have implemeted search api with html standard input element.
This functionality is implemeted inside Header.js
I have also used debouncing for reducing extra api call when user is typing continuously

State Management (Redux-toolkit) -> this library I have used for managing central state as well as for handling asyn task I have used createAsyncThunk, which beautiful handle our api call amd save states.

Loader -> One common loader I have used for handling all pending states.

Null check -> I tried to use null check so will not get page breaking error(in case of no data)
