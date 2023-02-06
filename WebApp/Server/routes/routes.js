'use strict'

const express = require('express');

//initialiser le router express
const router = express.Router();


//GET REQUESTS

router.get('/', (req,res) =>
{
    res.json("hello bitches");
});

module.exports = router;