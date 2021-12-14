import { useContext,createContext } from "react";

const intialState = {};
const UserContext = createContext();
const UserProvider = ({children})=>{
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = ()=>{
    return useContext(UserContext)
}
export {UserContext,UserProvider}