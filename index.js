const ccxt = require('ccxt');
const colors = require('colors');

const standard_input = require('./utilities/CL-interface');
const log = require('./utilities/logger');

const bitfinex = new ccxt.bitfinex();

console.log('process ', process.env)

let counter = 1;

const startPolling = async () => {
    try {
        let bitfinex_prices = await bitfinex.fetchTicker('BTC/USD');
        log.info(`--> REQUEST ${counter}: `, bitfinex_prices);
        console.info(`--> REQUEST ${counter}: `, bitfinex_prices);
    } catch(err) {
        log.error(`--> REQUEST ${counter}: `, err);
        console.error(`--> REQUEST ${counter}: `, err);
    }
    counter++;
};

setInterval(startPolling, 20000);
