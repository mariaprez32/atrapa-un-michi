import { createContext, useReducer } from 'react';

export const FavoritesContext = createContext();

const initialState = {
  favorites: []
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (!state.favorites.find(cat => cat.id === action.payload.id)) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      }
      return state;
      
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(cat => cat.id !== action.payload)
      };
      
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const addFavorite = (cat) => {
    dispatch({ type: 'ADD_FAVORITE', payload: cat });
  };

  const removeFavorite = (catId) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: catId });
  };

  const isFavorite = (catId) => {
    return state.favorites.some(cat => cat.id === catId);
  };

  return (
    <FavoritesContext.Provider value={{ 
      favorites: state.favorites, 
      addFavorite, 
      removeFavorite,
      isFavorite 
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}; 