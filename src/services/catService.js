const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';


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


function getRandomName() {
  const names = [
    'Luna', 'Simba', 'Milo', 'Nala', 'Oliver', 'Loki', 'Coco',
    'Toby', 'Bella', 'Leo', 'Rocky', 'Fuzzy', 'Garfield', 'Kitty',
    'Oreo', 'Felix', 'Fluffy', 'Kira', 'Tom', 'Spot', 'Sylvester'
  ];  
  
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function getRandomDescription() {
  const descriptions = [
    'He is very playful and loves chasing balls.',
    'He is calm and enjoys sleeping all day.',
    'He is very affectionate and always wants to be on your lap.',
    'He is independent but very loyal to his owners.',
    'He loves climbing and exploring high places.',
    'He is very sociable and gets along well with other animals.',
    'He is shy at first but very sweet once he gains confidence.',
    'He has a very curious personality and loves to investigate everything.',
    'He is an expert toy hunter.',
    'He is very vocal and will always tell you about his day with meows.'
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
  // fetchCatById
};