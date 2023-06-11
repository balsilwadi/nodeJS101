const express = require('express');
const {engine} = require('express-handlebars')
const app = express()

app.engine(".hbs", engine({extname: ".hbs"}))
app.set("View engine", "hbs")
app.set("views", "./views")

app.get("/",(req, res)=>{
    res.render("home.hbs");
})

app.listen(5000,()=> console.log("Running on 5000"))