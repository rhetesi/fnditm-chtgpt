'use strict';
// import apiUrl  from './services/config.js';
import { getAll, get } from './services/base.js';

// const apiUrl = 'https://my-json-server.typicode.com/rhetesi/fnditm-chtgpt';

// Hogy NE lehessen kívülről hozzáférni semmilyen változóhoz, ezeket NEM itt kell majd definiálni
// hanem az adott funkciót megvalósító blokk elején, s ott ráadásul elég lesz az 'entity' változó használata
const itemsEntity = 'items';
const usersEntity = 'users';
let itemsList = [];
let usersList = [];
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

// A getList() megfelelő entity és array paraméterek meghívásával
// az API felől érkező elemek a hívásban szereplő tömbbe kerülnek
// itt az itemsEntity (entity) és az ItemsList (tömb)
getList(itemsEntity, itemsList);
console.log(itemsList);
// console.log(itemsList2);