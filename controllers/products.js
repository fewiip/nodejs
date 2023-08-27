const Product = require('../models/product');

exports.getMethodAddProduct = (request,response,next) => {
        //response.send('<h1>the add product page</h1> <br> <form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">TEST!</button></form> ');//isso aqui que ele vai imprimir no navegador 
        //response.sendFile(path.join (__dirname, '..', 'views', 'add-product.html') );
        //response.sendFile(path.join (rootDir, 'views', 'add-product.html') );
        response.render('add-product', {
                pageTitle: 'Add Product', 
                path: '/admin/add-product', 
                formsCSS: true, 
                productCSS: true, 
                activeAddProduct:true 
        }); 
}

exports.postMethodAddProduct = (request,response,next) => { 
        //console.log(request.body);
        //console.log(request.body.title);
        //products.push({ title: request.body.title });
        //console.log(products);
        const product = new Product(request.body.title);
        product.save();
        response.redirect('/'); 
}

exports.getProducts = (request, response, next) => {
    //response.send('<h1>Hello from express!</h1>'); 
    //response.sendFile(path.join (rootDir, 'views', 'shop.html') ); 
    //const products = adminData.products;
    Product.fetchAll((products) => {
        response.render('shop', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
            hasProducts: products.length > 0, 
            activeShop: true, 
            productCSS: true,
            layout: false
        });
    });
}