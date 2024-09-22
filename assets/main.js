'use strict';

const apiUrl = 'https://my-json-server.typicode.com/rhetesi/fnditm-chtgpt';
const itemsEntity = 'items';

const getItemsfromAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/${itemsEntity}`);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error)
    }
  }
  getItemsfromAPI();