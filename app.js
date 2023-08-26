const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//a ordem importa aqui 
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.urlencoded());//ja ia funcionar assim 
//assim posso usar o body-parser nas outras linhas de codigo 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);//app.use(adminRoutes);//assim eu consigo usar as rotas de admin 
app.use(shopRoutes);

app.use((request, response, next) => {
    //response.status(404).send('<h1>page no found! 404 </h1>');
    response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

//console.log(routes.someText);
app.listen(3000);



/*

const http = require('http');
const fs = require('fs');
const express = require('express');

const routes = require('./routes.js');
const server = http.createServer(routes.handler);

server.listen(3000);//3000 é a porta 

const app = express();*/

/*

core modules: 
http
https
fs
path
os 


function requestListener (request, result) {
    //essa funcao sera chamada toda vez que vier um request 
    //console.log(request);
    console.log(request.url, request.headers);//request.method nao ta disponivel nao sei porque 
    //process.exit();//como sair do processo 

    
}

const server = http.createServer(requestListener);

const server = http.createServer((request, result) => {
    const url = request.url;
    const method = request.method;//MANO O CARA ESCREVEU ESSA COISA NADA HAVER!!!

    if (url === '/'){
        result.setHeader('Content-Type', 'text/html');
        result.write('<html>');
        result.write('<head><title>Index page!</title></head>');
        result.write('<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">Send</button></body>')
        result.write('</html>');
        return result.end();//assim nem continua a funcao anonima
    }

    if (url === '/message' && method === 'POST') {
        const body =[]; 
        request.on('data', (dataChunk) => {
            //console.log(dataChunk);
            body.push(dataChunk);
        });//o metodo 'on' deixa a gente 'ouvir' algum evento 
        request.on('end', () => {//vai ser executado bem no final de uma requisicao 
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);//se for assim ele vai imprimir algo do tipo: "message=esse+%E9+o+canal+do+simpson+gamer+esse+canal+%E9+bom+demais+"
            const message = parsedBody.split('=')[1];//dessa maneira finalmente teremos 'esse+%E9+o+canal+do+simpson+gamer+esse+canal+%E9+bom+demais+'
            result.statusCode = 302;
            console.log(message);
            return result.end();
        });//ouvir quando chega no fim 


        //fs.writeFile('message.txt', 'DUMMY');  
        //result.setHeader('Location', '/');
        
        return result.end();
    }

    //essa funcao sera chamada toda vez que vier um request 
    //console.log(request);
    console.log(request.url, request.method, request.headers);
    //process.exit();//como sair do processo 

    result.setHeader('Content-Type', 'text/html');
    result.write('<html>');
    result.write('<head><title>peidei</title></head><body>teeeest</body>');
    result.write('</html>');
    result.end();
});
*/

/*
//use vai fucionar com o get ou o post 
app.use('/', (request,response, next) => {
    // pro endereço '/' e os filhinhos, '/add-product' é subdominio de '/'
    console.log('this always runs!');
    //response.send('Hello from express');//permite enviar uma resposta
    //so pode ter uma resposta, mas pode ter varios console logs 
    next();
});
//const server = http.createServer();

//diferent routes 
app.use('/add-product', (request, response, next) => {
    //o que acontece quando eu acesso: 'http://localhost:3000/add-product'
    response.send('<h1>the add product page</h1> <br> <form action="/product" method="POST"><input type="text" name="title"><button type="submit">TEST!</button></form> ');//isso aqui que ele vai imprimir no navegador 
    console.log('tentou acessar a pagina de "add product"');
    //next();//precisa disso pra poder avançar pro proximo middleware
}) ;//next é uma função 

//tem a mesma funcionalidade do app.use, mas pra post resquest, tambem tem pra get requests 
app.post('/product' , (request, response, next) => {
    console.log(request.body);
    response.redirect('/');
    
});

app.use('/', (request,response, next) => {
    // pro endereço '/' e os filhinhos, '/add-product' é subdominio de '/'
    console.log('this always runs!');
    response.send('hello from express.js');//permite enviar uma resposta
    //so pode ter uma resposta, mas pode ter varios console logs 
    next();
});
//const server = http.createServer();

app.listen(3000);


/*
app.listen(3000);


ja faz :
const http = require('http');
server.listen(3000);

*/

