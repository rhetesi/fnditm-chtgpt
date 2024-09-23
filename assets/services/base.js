'use strict';
import apiUrl from "./config.js";

// Base CRUD service

// getAll
const getAll = async (entity) => {
    try {
      const response = await fetch(`${apiUrl}/${entity}`);
      const result = await response.json();
      return result
    } catch (error) {
      console.error(error)
    }
  }

// get
const get = async (entity, id) => {
  try {
    const response = await fetch(`${apiUrl}/${entity}/${id}`);
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