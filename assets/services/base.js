'use strict';
import apiUrl from "./config.js";

// Base CRUD service

// getAll
const getAllItemsfromAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/${itemsEntity}`);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error)
    }
  }
//   getItemsfromAPI();

// get

// Create

// Update

// Delete

export { getAllItemsfromAPI }