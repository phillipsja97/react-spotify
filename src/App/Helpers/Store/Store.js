import React from 'react';

export const initialState = { currentSong: "73gesq6rZOfhlsSEzDu3lc" };

export const Context = React.createContext();

export const reducer = (state, action) =>{
  switch (action.type) {
    case "loadSong":
      return { currentSong: action.payload }
    default:
      return state
  }
};
