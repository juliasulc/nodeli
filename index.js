console.log('Hello, nodeli...');

const ccxt = require('ccxt');
console.log('ccxt ', ccxt);

const bitfinex = new ccxt.bitfinex();
console.log('bitfinex ', bitfinex);

let counter = 1;
// bitfinex.proxy = 'https://cors-anywhere.herokuapp.com/';

const prova = async () => {
    let bitfinex_prices = await bitfinex.fetchTicker('BTC/USD');
    console.log(`----------- REQUEST NUMBER ${counter} --------------- `);
    console.log(bitfinex_prices);
    counter++;
};

setInterval(prova, 3000);
