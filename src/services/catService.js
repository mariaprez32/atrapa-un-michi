import i18n from '../i18n/i18n'; // ajusta la ruta a tu archivo de configuración

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
      description: truncateText(cat.breeds[0].description, 130), //breeds es un array con un solo objeto (0) y éste último tiene sus propiedades como description
      tag: [getRandomTag(), cat.breeds[0].name],
    }));
    
  } catch (error) {
    console.error('Error en fetchCats:', error.message);
    return [];
  }
};


const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  const sliced = text.slice(0, maxLength);
  const lastSpace = sliced.lastIndexOf(" ");
  return sliced.slice(0, lastSpace) + "...";
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
  i18n.t('tags.puppy'),    
  i18n.t('tags.young'),   
  i18n.t('tags.adult'),    
  i18n.t('tags.senior')     
];
  
  const randomIndex = Math.floor(Math.random() * tags.length);
  return tags[randomIndex];
}

export default {
  fetchCats
};