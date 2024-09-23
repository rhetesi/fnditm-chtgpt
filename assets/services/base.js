'use strict';
import apiUrl from "./config.js";

// Base CRUD service

// getAll
const getAllItemsfromAPI = async (entity) => {
    try {
      const response = await fetch(`${apiUrl}/${entity}`);
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