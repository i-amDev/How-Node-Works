const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale' , () => {
    console.log('There is a new sale.');
});

myEmitter.on('newSale' , () => {
    console.log('Customer name is Tony');
});

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit('newSale', 10);

const server = http.createServer();

server.on('request', (request, response) => {
    console.log('Request received!');
    response.end('Request received');
});

server.on('request', (request, response) => {
    console.log('Another request received!😃');
});

server.on('close', () => {
    console.log('Server closed!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for requests...')
})