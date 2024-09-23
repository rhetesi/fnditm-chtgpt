'use strict';
import apiUrl from "./config.js";

// Base CRUD service

// getAll
const getAll = async (entities) => {
    try {
      const response = await fetch(`${apiUrl}/${entities}`);
      const result = await response.json();
      // console.log(result);
      return result
    } catch (error) {
      console.error(error)
    }
  }
//   getItemsfromAPI();

// get
const get = async (entities, id) => {
  try {
    const response = await fetch(`${apiUrl}/${entities}/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error)
  }
}

// Create

// Update

// Delete

export { getAll, get }