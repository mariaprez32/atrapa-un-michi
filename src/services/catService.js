const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';
// const API_KEY = 'live_xob7TMwGttCTFIkJHacvJPzoPKMp3HBR9odOg1rwvAowWzpOqThtIC0t1OorQaAb';


export const fetchCats = async() => {
  try {
    const response = await fetch(`${API_URL}`);
    
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
      description: getRandomDescription(),
      tag: getRandomTag(),
      buttonText: '¡Adóptame!'
    }));
    
  } catch (error) {
    console.error('Error en fetchCats:', error.message);
    return [];
  }
};

/**
 * Obtiene los detalles de un gato específico por su ID
 * @param {string} id - ID del gato
 */
export const fetchCatById = async (id) => {
  if (!id) {
    console.error('Se requiere un ID para obtener un gato específico');
    return null;
  }

  try {
   
    const response = await fetch(`${API_URL}/images/${id}`);
    
    if (!response.ok) {
      console.error(`Error al obtener el gato: ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    
    return {
      id: data.id,
      image: data.url,
      name: getRandomName(),
      description: getRandomDescription(),
      status: 'Disponible para adopción',
      tag: getRandomTag()
    };
    
  } catch (error) {
    console.error('Error en fetchCatById:', error.message);
    return null;
  }
};

function getRandomName() {
  const names = [
    'Luna', 'Simba', 'Milo', 'Nala', 'Oliver', 'Loki', 'Coco',
    'Toby', 'Bella', 'Leo', 'Rocky', 'Pelusa', 'Garfield', 'Kitty',
    'Oreo', 'Felix', 'Fluffy', 'Kira', 'Tom', 'Manchas', 'Silvestre'
  ];
  
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function getRandomDescription() {
  const descriptions = [
    'Es muy juguetón y le encanta perseguir pelotas.',
    'Es tranquilo y le gusta dormir todo el día.',
    'Es muy cariñoso y siempre quiere estar en tu regazo.',
    'Es independiente pero muy leal a sus dueños.',
    'Le encanta trepar y explorar lugares altos.',
    'Es muy sociable y se lleva bien con otros animales.',
    'Es tímido al principio pero muy dulce cuando toma confianza.',
    'Tiene una personalidad muy curiosa y le gusta investigar todo.',
    'Es un experto cazador de juguetes.',
    'Es muy vocal y siempre te contará su día con maullidos.'
  ];
  
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  return descriptions[randomIndex];
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
  fetchCats,
  fetchCatById
};