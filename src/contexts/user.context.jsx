import {createContext, useState, useEffect} from 'react';

import {onAuthStateChangedListener,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

//as the actual value you want to access
export const userContext = createContext({
    currentUser: null,
    setCurrentUser:() => null,
});

//to wrap around <app/> in index.js
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    //passes the currentUser and setCurrentUser
    const value = {currentUser,setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            console.log(user);
            if (user) {
                createUserDocumentFromAuth(user);

            }
            setCurrentUser(user);});
        
        return unsubscribe; 
    },[]);

    return(
        <userContext.Provider value={value}>{children}</userContext.Provider>
    );
}