const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const products = [];

router.get('/add-product', (request, response, next) => {
    //response.send('<h1>the add product page</h1> <br> <form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">TEST!</button></form> ');//isso aqui que ele vai imprimir no navegador 
    //response.sendFile(path.join (__dirname, '..', 'views', 'add-product.html') );
    //response.sendFile(path.join (rootDir, 'views', 'add-product.html') );
    response.render(
        'add-product', {
            pageTitle: 'Add Product', 
            path: '/admin/add-product', 
            formsCSS: true, 
            productCSS: true, 
            activeAddProduct:true 
        }
    );
});

router.post('/add-product', (request, response, next) => {
    //console.log(request.body);
    //console.log(request.body.title);
    products.push({ title: request.body.title });
    //console.log(products);
    response.redirect('/');
});

//module.exports = router;//assim a gente pode importar no app.js
/*
module.exports.routes = router;
module.exports.products = products;
*/

/*
module.exports = {
    routes:router, products:products
}; 
*/
exports.routes = router;
exports.products = products;



/*
funciona igual ao app.get 
*/
//router.use
//router.get
//router.post 

/*
porque eu coloquei 
app.use('/admin', adminRoutes);
app.use(adminRoutes);

agora essas rotas são:

localhost:3000/admin/add-product 

eu posso ter dois metodos diferentes!
router.get('/add-product', (request, response, next) => {
    response.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">TEST!</button></form> ');//isso aqui que ele vai imprimir no navegador 
router.post('/add-product', (request, response, next) => {

*/
