const express = require('express');
const {engine} = require('express-handlebars')
const app = express()

const KEY = 'AIzaSyCG-T8H_3YX2CCNJHD7_aOJhZkZ13qIWz8';
const tenorjs = require('tenorjs').client({
    "Key": KEY, // https://developers.google.com/tenor/guides/quickstart
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "basic", // either minimal or basic, not case sensitive
    "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly
})

app.engine(".hbs", engine({extname: ".hbs"}))
app.set("View engine", "hbs")
app.set("views", "./views")

app.get("/",(req, res)=>{
    res.render("home.hbs")
})

app.get("/search",(req, res)=>{
    const {term} = req.query;

    if(!term){
        res.render("search.hbs",{error: "Provide valid term"})
    } 
    else{
        tenorjs.Search.Query(term,'50').then(Results =>{
            console.log(Results)
            tenorjs.Suggest.Suggestions(term).then(Suggestion => {
            res.render("search.hbs", {GIFs: Results, suggestion: Suggestion});
          })
                 
        })  
    }
})
app.get("/random",(req, res)=>{
    const {term} = req.query;

    if(!term){
        res.render("random.hbs",{error: "Provide valid term"})
    } 
    else{
        tenorjs.Search.Random(term,'6').then(Results =>{
            console.log(Results)
            res.render("random.hbs", {GIFs: Results});     
        })  
    }

})

app.listen(5000,()=> console.log("Running on 5000"))