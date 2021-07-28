require('./db/mongoose');
const path = require("path");
const hbs = require("hbs");
const express = require('express');
const app = express();
const User = require('./models/user');
const Task = require('./models/task');
const bodyParser = require('body-parser');
const routes = require('./routes');

// Define Path for express config
const publicDirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials' );

// setup static directory to serve
app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

routes.apiRoutes(app);

// Navigate from one page to another page
// parameters are, 1. page link, 2. values given for home page
app.get('/',function(req,res){
    res.render("login");
})

app.get('/users',function(req,res){
    res.render("user");
})

app.get('/tasks',function(req,res){
    res.render("task");
})

app.get('/users/add',function(req,res){
    res.render("addUser");
})

app.get('/tasks/add',function(req,res){
    res.render("addTask");
})

app.get('/register',function(req,res){
    res.render("register");
})



app.listen(8000,function(){
    console.log("The project is running in port 8000")
})