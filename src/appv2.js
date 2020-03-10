const express = require('express'); //load 'express' library

const app = express(); //express is a fcn to create an express application; NOT an object

//Routes //.get() gets resources at specific url :html, JSON, other assets 
app.get('', (req, res) => { //parameters: route '', action fcn (request to the server: req, response customized viewing to client through methods: res)
    //res.send('Hello express!') //.send() is a handler to send something back to client requesting npm or browser
    res.send('<h1>Weather</h1>') //HTML i.e. h1 element,JSON or String 'text' used value being passed
})

app.get('/help', (req, res) => {
    //res.send('Help page') //.send('title') that renders on browser
    /* res.send({ //provide an object or array value to 'send //return Stringify of object to the web browser
        name: 'Carlos',//object example in JSON format// object property : with value
        age: 25
    })  */

    res.send([{ 
    name: 'Carlos',//array of objects example in JSON format
    age: 25
    }, {
    name: 'Victoria',
    age: 23
    
    }]) 
})

// Goal: Update routes
//
// 1. Setup about route to render a title with HTML
// 2. Setup a weather route to send back JSON
//  - Object with forecast and location strings
// 3. Test your work by visiting both in the browser

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>') //renders a html, title style
})

app.get('/weather', (req, res) => {
    res.send({ // //sends back JSON via an object//object requires {} braces in the fcn
        forecast:'It is 50 degrees',
        location: 'Philadelphia'
    }) 
})

/

// app.com - make believe website //domain one owns// root route
// app.com/help //help route
// app.com/about // other route



app.listen(3000, () => { //'listen' method that starts the sever on a particular port// server is asynchronous process //3000 works well at local machine
    console.log('Sever is up on port 3000')
}) 

//ctrl C shuts down server in terminal
//browser address: localhost:3000 for root route //no spaces between : and 3000
//browser address: localhost:3000/weather for weather page (route)