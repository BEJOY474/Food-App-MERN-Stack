const express = require('express');
const { getAllPizzas, uppizza } = require('../controllers/pizza.controller');

const pizzaRoute = express.Router();

pizzaRoute.get("/getAllpizzas", getAllPizzas);

pizzaRoute.post("/uppizza", uppizza);

module.exports = pizzaRoute;