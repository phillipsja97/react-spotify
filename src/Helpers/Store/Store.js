import React from 'react';

export const initialState = { currentSong: "" };

export const Context = React.createContext();

export const reducer = (state, action) =>{
  switch (action.type) {
    case "loadSong":
      return { currentSong: action.payload }
    case "loadPlaylist":
      return { currentPlaylist: action.payload }
    default:
      return state
  }
};

