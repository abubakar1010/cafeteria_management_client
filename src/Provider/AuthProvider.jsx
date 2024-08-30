import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) {
            console.log(currentUser);
            
            setUser(currentUser)
            setIsLoading(false)
        }
    })

    return () => unSubscribe()

  },[])

  console.log(user);
  

  const userInfo = {
    user,
    isLoading,
    login,
    createUser,
    logout,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
