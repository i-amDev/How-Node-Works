const EventEmitter = require('events');

const myEmitter = new EventEmitter();

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