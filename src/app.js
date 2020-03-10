const express = require('express'); //load 'express' library

const app = express(); //express is a fcn to create an express application; NOT an object

//Routes //.get() gets resources at specific url :html, JSON, other assets 
app.get('', (req, res) => { //parameters: route '', action fcn (request to the server: req, response customized viewing to client through methods: res)
    res.send('Hello express!') //.send() is a handler to send something back to client requesting npm or browser
})

app.get('/help', (req, res) => [
    res.send('Help page') //.send('title') that renders on browser
])

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('Your Weather')
})

//
// Goal: Setup two new routes
//
// 1. Setup an about route and render a page title
// 2. Setup a weather route and render a page title
// 3. TEst your work by visiting both int he browser

// app.com - make believe website //domain one owns// root route
// app.com/help //help route
// app.com/about // other route



app.listen(3000, () => { //'listen' method that starts the sever on a particular port// server is asynchronous process //3000 works well at local machine
    console.log('Sever is up on port 3000')
}) 

//ctrl C shuts down server in terminal
//browser address: localhost: 3000 for root route
//browser address: localhost: 3000/weather for weather page (route)