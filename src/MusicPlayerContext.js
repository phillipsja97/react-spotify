import React from 'react';

export const initialState = { currentSong: "" };

export const reducer = (state, action) => {
  switch (action.type) {
    case "loadSong":
      return { currentSong: action.payload }
    default:
      return state
  }
};

export const Context = React.createContext();



