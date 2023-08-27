const path = require('path');
const express = require('express'); 
const productsController = require('../controllers/products');
const router = express.Router(); 

router.get('/add-product', productsController.getMethodAddProduct);
router.post('/add-product', productsController.postMethodAddProduct);

module.exports = router;//assim a gente pode importar no app.js
/*
module.exports.routes = router;
module.exports.products = products;
*/

/*
module.exports = {
    routes:router, products:products
}; 
*/
/*
exports.routes = router;
exports.products = products; 
*/


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
