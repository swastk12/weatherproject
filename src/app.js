const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express()

const public = path.join(__dirname, "../public");
const template_path =path.join(__dirname, "../template/views");
const partial_path = path.join(__dirname,"../template/partials");


app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partial_path);
app.use(express.static(public));

app.get("/", (req,res)=>{
res.render("index")
})
app.get("/about", (req,res)=>{
res.render("about")
})
app.get("/weather", (req,res)=>{
res.render("weather")
})
app.get("*", (req,res)=>{
res.render('404error' , {
    errorMsg:"Opps! Pages Not Founds",
})
})

app.listen("3000",()=>{
console.log("successfull port");
})