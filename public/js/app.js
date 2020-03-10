console.log('Client side javascript file is loaded!')
//LOADING DATA TO FRONTEND side of JS
//fetch fcn is a browser based api in a 'string website address' used in all modern browser, not part of JS, not in node 'aka backend' ONLY FRONT END
//fetch obtain data from link and displays on front end
//fetch('http://puzzle.mead.io/puzzle') //asynchronous function, data delayed//link is an api
//fetch('http://puzzle.mead.io/puzzle'.then(()) => {})// 'then' is callback method from return of fetch
//fetch('http://puzzle.mead.io/puzzle').then((response) => {  // fetch data from url and then run function of operation being held in response
  //  response.json().then((data) => { //callback fcn//data is an object
    //    console.log(data);
    //})
//})

//
// Goal: Fetch weather!
// 1. Setup a call to fetch to fetch weather for Boston
// 2. Get the parse JSON response
//  - If error properly, print error
//  - If no error property, print location and forecast
// 3. Refresh the browser and test your work!

//Section 8 video 57 - Data source upload to Browser's console: a Client-side request using Fetch API function

/* MOVED WITHIN INTO submit callback BELOW fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if (data.error){
            console.log(data.error)
        }
        else {
            console.log(data.location),
            console.log(data.forecast)
        }

    })
}) */

//obtain value
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')// first paragraph from index.hbs
//messageOne.textContent = 'From JavaScript'
//Select the second message p from JavaScript
const messageTwo = document.querySelector('#message-2')// second paragraph from index.hbs


// Goal: Render content to paragraphs
//
// 1. Select the second message p from JavaScript
// 2. Just before fetch, render loading message and empty p
// 3. If error, render error
// 4. If no error, render location and forecast
// 5. Test your work! Search for errors and for valid location
// Section 8 video 59 - Weather App: User Interface - Editing & Displaying info from console to public browser 

//manipulate input - submit callback
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault(); //prevents refresh browser
   

    const location = search.value//value extracts user value from form

    messageOne.textContent = 'Loading...' // render loading message and empty p //displays before fetch operation below
    messageTwo.textContent = ''

    //console.log(location)
    //fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    fetch('/weather?address=' + location).then((response) => { //**3.**made sure request is being done from the right location
    response.json().then((data) => {
        if (data.error){ //invalid values
            //console.log(data.error)
            messageOne.textContent = data.error; // If error, render error
        }
        else { //valid values
            //console.log(data.location),
            //console.log(data.forecast)

            messageOne.textContent = data.location //If no error, render location and forecast
            messageTwo.textContent = data.forecast

        }

    })
})
})

//
// Goal: Use input value to get weather
// 
// 1. Migrate fetch call into the submit callback
// 2. Use the search text as the address query string value
// 3. Submit the form with a valid and invalid value to test
//

//Section 8 video 58 - Retrieving User's input to Manipulate data source: understanding forms, data retrieval timing, and response