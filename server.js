const express = require('express');
const app = express();
const port = 3000;

const drinks = require('./models/drinks.js');
const food = require('./models/food.js');

app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App");
});

app.get('/drinks/', (req, res) => {
    res.render("index.ejs", {allDrinks:drinks});
});

app.get('/food/', (req, res) => {
    res.render('food_index.ejs', {allFood:food});
});

app.get('/drinks/:id', (req, res) => {
    res.render("show.ejs", {
        drink: drinks[req.params.id]
    });
});

app.get('/food/:id', (req, res) => {
    res.render("food_show.ejs", {
        food: food[req.params.id]
    });
});

app.listen(port, () => {
    console.log("listening on port: ", port);
});