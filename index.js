const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');
const Models = require("./models")
const educareapiRoutes = require("./educare");
const educare = Models(process.env.MONGO_DB_URL || "mongodb://localhost/educare");
const educareapiroutes = educareapiRoutes(educare);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('handlebars',exphbs({defaultLayout : 'main'}) );
app.set('view engine', 'handlebars');
app.use(session({
    secret:'keyboard cat',
    cookie: { maxAge: 60000 *30 },
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.get("/api/school", educareapiroutes.index)
// app.get("/api/shoes/brand/:brandname", shoeapiroutes.brandname)
// app.get("/api/shoes/size/:size", shoeapiroutes.brandsize);
// app.get("/api/shoes/brand/:brandname/size/:size", shoeapiroutes.shoeBrandSize)
// app.post("/api/shoes/sold/:id", shoeapiroutes.stockUpdate)
app.post("/api/school", educareapiroutes.add)


let portNumber =process.env.PORT || 4000;
app.listen(portNumber, function(){
    console.log('Web application started on port ' + portNumber);
});
