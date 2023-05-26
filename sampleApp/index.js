import {Paytring} from "../src/index.js";

const apiKey = 'test';
const apiSecret = 'test';

const pg = new Paytring(apiKey, apiSecret);

const orderDetails =  {
    amount: 100,
    key: apiKey,
    receipt_id: Math.floor(Math.random()*90000) + 10000,
    cname: 'client name',
    phone: 9898989898,
    email: 'a@mcsam.in',
    callback_url: 'http://localhost:3000/v1/order-create',
}

const process = async() => {
    const order = await pg.order.create(orderDetails);
    console.log({order})
    const fetchedOrder = await pg.order.fetch(order.order_id);
    console.log({fetchedOrder})
}

process()
