const fs = require('fs');
const path = require('path');

const filepath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = callback => {
    /*
    codigo do instrutor que nao funcionou 
    
    fs.readFile(filepath, (err, fileContent) => {
        
        if(err){
            callback([]);
        }else{
            callback(JSON.parse(fileContent));
        } 
    });
    */
    
    fs.readFile(filepath, (err, fileContent) => {
        if (err) {
            callback([]);
        }else if (fileContent.length){
            //pega um texto e transforma num objeto
            callback(JSON.parse(fileContent));
        }else{
            callback([]);
        } 
    });
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile( products => {
            products.push(this);
            fs.writeFile(filepath, JSON.stringify(products), err => {
                console.log(err);
            });
        });  
    }

    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
}