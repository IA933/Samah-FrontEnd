import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isSignedIn, dispatch] = useReducer(reducer, false);

  // Define a reducer function to update the state
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return { ...state, isSignedIn: true };
      case 'SIGN_OUT':
        return { ...state, isSignedIn: false };
      default:
        return state;
    }
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
