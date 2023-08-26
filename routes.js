const fs = require('fs');

const requestHandler = (request, result) => {
    const url = request.url;
    const method = request.method;

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


        /*fs.writeFile('message.txt', 'DUMMY');  
        result.setHeader('Location', '/');*/
        
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

};

//module.exports = requestHandler;

/*
module.exports.handler = requestHandler;
module.exports.someText = 'some hard coded text';
*/


module.exports = {
    handler: requestHandler,
    someText : 'some hard coded text'
};

/*
aí no app.js a gente ia ter que mudar a linha que tava assim:
const server = http.createServer(routes);

pra isso aqui:
const server = http.createServer(routes.handler);
*/