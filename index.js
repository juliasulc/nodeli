const ccxt = require('ccxt');
const colors = require('colors');
const bitfinex = new ccxt.bitfinex();
console.log('Hello, nodeli...');
console.log('ccxt ', ccxt);
console.log('bitfinex ', bitfinex);

let counter = 1;

const prova = async () => {
    try {
        let bitfinex_prices = await bitfinex.fetchTicker('BTC/USD');
        console.log(`----------- REQUEST NUMBER ${counter} ---------------`.blue);
        console.log(`------ ${new Date()} ------`.blue);
        console.log(bitfinex_prices);
    } catch(err) {
        console.log(`----------- ERROR ON REQUEST NUMBER ${counter} ---------------`.red)
        console.log(`------ ${new Date()} ------`.red);
        console.error(err)
    }
    counter++;
};

setInterval(prova, 240000);
