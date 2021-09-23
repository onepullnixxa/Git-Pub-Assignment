const express = require('express');
const app = express();
const port = 3000;

const drinks = require('./models/drinks.js');

app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App");
});

app.get('/drinks/', (req, res) => {
    res.render("index.ejs", {allDrinks:drinks});
});

app.get('/drinks/:id', (req, res) => {
    res.render("show.ejs", {
        drink: drinks[req.params.id]
    });
})

app.listen(port, () => {
    console.log("listening on port: ", port);
});