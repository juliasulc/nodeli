console.log('Hello, nodeli');

const ccxt = require('ccxt');
console.log('ccxt ', ccxt);

const bitfinex = new ccxt.bitfinex();
console.log('bitfinex ', bitfinex);

const counter = 1;
// bitfinex.proxy = 'https://cors-anywhere.herokuapp.com/';

const prova = async () => {
    let bitfinex_prices = await bitfinex.fetchTicker('BTC/USD');
    console.log(`bittrex request #${counter} -> `, bitfinex_prices);
    counter++;
};

setInterval(prova, 30000);
