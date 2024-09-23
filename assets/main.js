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

// A getList() megfelelő entity és array paraméterek meghívásával
// az API felől érkező elemek a tömbbe kerülnek
const getList = async (entity, array) => {
 
    // forEach()-el végigmenve az intern tömb elemeit egyesével átadja a hívásban szereplő tömbnek
    const internArray = await getAll(entity);
    internArray.forEach(element => {
        array.push(element)
    });
}

// A getList() megfelelő entity és array paraméterek meghívásával
// az API felől érkező elemek a hívásban szereplő tömbbe kerülnek
// itt az itemsEntity (entity) és az ItemsList (tömb)
getList(itemsEntity, itemsList);
console.log(itemsList);
// console.log(itemsList2);