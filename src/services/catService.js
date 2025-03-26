const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1';


export const fetchCats = async() => {
  
  try {
    const response = await fetch(`${API_URL}`, {
      headers: {
        'x-api-key': import.meta.env.VITE_API_KEY
      }
    });
    
    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return [];
    }
    
    const data = await response.json();
    console.log("Datos recibidos:", data);
    
    return data.map((cat) => ({
      id: cat.id,
      image: cat.url,
      name: getRandomName(),
      description: cat.breeds[0].description, //breeds es un array con un solo objeto (0) y éste último tiene sus propiedades como description
      tag: [getRandomTag(), cat.breeds[0].name],
      buttonText: '¡Adóptame!'
    }));
    
  } catch (error) {
    console.error('Error en fetchCats:', error.message);
    return [];
  }
};


function getRandomName() {
  const names = [
    'Luna', 'Simba', 'Milo', 'Nala', 'Oliver', 'Loki', 'Coco',
    'Toby', 'Bella', 'Leo', 'Rocky', 'Fuzzy', 'Garfield', 'Kitty',
    'Oreo', 'Felix', 'Fluffy', 'Kira', 'Tom', 'Spot', 'Sylvester'
  ];  
  
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}



function getRandomTag() {
  const tags = [
    'Cachorro • 2-6 meses',
    'Joven • 6-12 meses',
    'Adulto • 1-3 años',
    'Senior • 4+ años'
  ];
  
  const randomIndex = Math.floor(Math.random() * tags.length);
  return tags[randomIndex];
}

export default {
  fetchCats
};