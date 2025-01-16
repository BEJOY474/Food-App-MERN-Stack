const express = require('express');
const { createUser, userLogin } = require('../controllers/users.controller');


const route = express.Router();


route.post("/register", createUser )
route.post("/userLog", userLogin)


module.exports = route;

