'use strict';

// Univerzális CRUD modul JSON és fájl feltöltéséhez, amelyet a ChatGPT generált
// a kódhoz tartozó csevegés: https://chatgpt.com/share/66f1d6a1-2af4-8000-8c78-fe0904186117

// Általános CRUD modul képfeltöltés támogatással
const CRUDModule = (function() {
    const apiUrl = 'https://api.example.com'; // Alapértelmezett API URL
  
    // Helper függvények az API kérésekhez
    const request = async (url, method, data = null, isFile = false) => {
      const options = {
        method,
        headers: {}
      };
  
      // Ha nem fájl a feltöltés, akkor JSON típusú kérést küldünk
      if (!isFile) {
        options.headers['Content-Type'] = 'application/json';
        if (data) {
          options.body = JSON.stringify(data);
        }
      } else if (data) {
        // Fájlfeltöltés esetén `FormData` használata
        const formData = new FormData();
        Object.keys(data).forEach(key => {
          formData.append(key, data[key]);
        });
        options.body = formData;
      }
  
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Hiba: ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error('API hívás hiba:', error);
        return null;
      }
    };
  
    // CREATE - új elem létrehozása (támogatja a fájlokat is)
    const create = async (entity, data, isFile = false) => {
      const url = `${apiUrl}/${entity}`;
      return await request(url, 'POST', data, isFile);
    };
  
    // READ - egy elem lekérése ID alapján
    const read = async (entity, id) => {
      const url = `${apiUrl}/${entity}/${id}`;
      return await request(url, 'GET');
    };
  
    // UPDATE - meglévő elem frissítése ID alapján (támogatja a fájlokat is)
    const update = async (entity, id, data, isFile = false) => {
      const url = `${apiUrl}/${entity}/${id}`;
      return await request(url, 'PUT', data, isFile);
    };
  
    // DELETE - elem törlése ID alapján
    const remove = async (entity, id) => {
      const url = `${apiUrl}/${entity}/${id}`;
      return await request(url, 'DELETE');
    };
  
    // Modul nyilvános interfésze
    return {
      create,
      read,
      update,
      delete: remove
    };
  })();
  
  // Példa használatra
  (async () => {
    const entity = 'images';
  
    // CREATE - új kép feltöltése
    const imageFile = document.querySelector('#imageInput').files[0]; // HTML fájl inputból
    const imageData = { name: 'Sample Image', image: imageFile };
    const createdImage = await CRUDModule.create(entity, imageData, true);
    console.log('Létrehozott kép:', createdImage);
  
    // READ - kép lekérése ID alapján
    const imageId = createdImage.id; // Használd a létrehozott kép ID-ját
    const image = await CRUDModule.read(entity, imageId);
    console.log('Lekért kép:', image);
  
    // UPDATE - kép frissítése
    const newImageFile = document.querySelector('#newImageInput').files[0];
    const updatedImageData = { name: 'Updated Image', image: newImageFile };
    const updatedImage = await CRUDModule.update(entity, imageId, updatedImageData, true);
    console.log('Frissített kép:', updatedImage);
  
    // DELETE - kép törlése
    const deletedImage = await CRUDModule.delete(entity, imageId);
    console.log('Törölt kép:', deletedImage);
  })();
  