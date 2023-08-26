const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get ('/', (request, response, next) => {
    //response.send('<h1>Hello from express!</h1>');
    response.sendFile(path.join (rootDir, 'views', 'shop.html') );

}); 

module.exports = router;