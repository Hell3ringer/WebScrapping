const express = require('express')
const router = express.Router();
const loginTemplate = require('../models/Login_model')


router.post('/login', async (req,res) => {
    console.log("req is " + req);
})

module.exports = router;