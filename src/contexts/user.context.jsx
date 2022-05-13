import {createContext, useState} from 'react';

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
    return(
        <userContext.Provider value={value}>{children}</userContext.Provider>
    );
}