// import React, { useReducer } from 'react';

// const initialState = { currentSong: '' };

// const store = React.createContext();

// const { Provider } = store;

// export default function contextProvider({ children }) {
//   const reducer = (state, action) => {
//   switch (action.action) {
//     case "Song": 
//       return {
//         ...state,
//         currentSong: action.payload,
//       }
//       break;
//       default:
//         throw Error;
//           break;
//     }
//   }
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return <Provider value={{ state, dispatch }}>{children}</Provider>
// }

