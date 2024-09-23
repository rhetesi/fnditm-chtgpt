'use strict';
import apiUrl  from './services/config.js';
import { getAll, get } from './services/base.js';

// const apiUrl = 'https://my-json-server.typicode.com/rhetesi/fnditm-chtgpt';
const itemsEntity = 'items';
let itemsList = [];
// let itemsList2 = [];

const getList = async (entity, array) => {
 
    // így látszólag egy tömbön belüli tömbben vannak az adatok
    // persze mert magát a tömböt push-olod bele a külső tömbbe,
    // itemsList2.push(await getAll(entity));

    // ahelyett, hogy szépen végigmennél a tömb elemein és azokat egyesével adnád át
    const internArray = await getAll(entity);
    internArray.forEach(element => {
        array.push(element)
    });
    // return array = internArray.map(element => element);
}

getList(itemsEntity, itemsList);
console.log(itemsList);
// console.log(itemsList2);