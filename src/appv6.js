const path =require('path')// core module - installation is built in. NO need package installation
const express = require('express'); //npm modules - load 'express' library
const hbs = require('hbs') // npm module - load 'hbs' library


//
//  Goal: Create a partial for the footer
// 1. Setup the template for the footer partial "Create by Some Name"
// 2. Render the partial at the bottom of all three pages
// 3. Test your work by visiting all three pages
// Section 7 video 49 - Handlebars: Rendering Partial templates - Unifying common parts of Website


const app = express(); //express is a fcn to create an express application; NOT an object

// Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public');//path variable to be expose to the web server
const viewPath = path.join(__dirname, '../templates/views'); //__dirname is path to folder currently at ; '../templates' is modified location
const partialPath = path.join(__dirname, '../templates/partials') //place handlebars in right directory

//function call 
    //Setup handlebars engine and view location
    app.set('view engine', 'hbs')//Setting up template engine, here HandleBars hbs for dynamic pages, case and spacing sensitive // .set set a value (key,value) 
    app.set('views', viewPath) // 'views' directory is set by default and has been changed using the second argument
    //Setup static directory to serve
    app.use(express.static(publicDirectoryPath))//express static takes the path to the folder returns it to app.use //serve up directory
hbs.registerPartials(partialPath) // takes the path to the directory where partial reside


//root page uses ''
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather', //Object values
        name: 'Mr. Wonderful',
        footer: 'Created By Mr. Wonderful'
    }) //render is like send.//index is the name of this template and root of website//renders converts hbs to html
}) // by 'web-server>node src/appv4.js' level

//about page
app.get('/about', (req, res) => { //Any page following root, requires '/' i.e '/about'
    res.render('about', {
        title: 'About Me',
        name: 'Mr. Wonderful',
        footer: 'Created By Mr. Wonderful'

    })
})


// Goal: Create a template for help page
//
// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is a help page',
        name: 'Mr. Wonderful',
        footer: 'Created By Mr. Wonderful'

    })  //restart ^C to refresh and update browser
})
// 3. Visit the route in the browser and see your help message print


app.get('/weather', (req, res) => { //route connection
    res.send({ // //sends back JSON via an object//object requires {} braces in the fcn
        forecast:'It is 50 degrees',
        location: 'Philadelphia'
    }) 
})


app.get('', (req,res) => { //Express matches everything else that hast been matched so far using * 
    res.send('My 404 page')
})

app.listen(3000, () => { //'listen' method that starts the sever on a particular port// server is asynchronous process //3000 works well at local machine
    console.log('Sever is up on port 3000')
}) 

//ctrl C shuts down server in terminal
//browser address: localhost:3000 for root route //no spaces between : and 3000
//browser address: localhost:3000/weather for weather page (route)
// node or nodemon src/appvN.js -e js, hbs provides other 'e'xtentsions