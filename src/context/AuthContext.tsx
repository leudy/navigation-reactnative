import React,{ createContext, useReducer } from "react"
import { authReducer } from "./authReducer"

// definir los datos del context
export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string
}
// declarando el initialSate
export const authInitialState: AuthState = {
    isLoggedIn : false,
    username : undefined,
    favoriteIcon : undefined
}
// declaramos la estructura de las props
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    signout:()=> void,
    changeIcon:(iconName:string)=>void;
    
}
// creamos el contexto
export const AuthContext = createContext({} as AuthContextProps)

// creamos el proveedor para que pueda ser usado en la app completa
export const AuthProvider = ({ children }: any) => {
 
    // injecting reducer and state using a reducer hook
    // at this point I use el autState, Initialstate, and Reducer,
    const [authState, dispatch] = useReducer(authReducer, authInitialState) 
    
   // this method call the reducer for generate newState
   const singIn = () =>{
       dispatch({type:'singIn'})
   }

   const ChangeIconHanlder = (iconName:string)=>{
       dispatch({type:'changeIcon',payload:iconName})
   }
   const singOut = () =>{
       dispatch({type:'singOut'});
   }
 


    return (<AuthContext.Provider
        value={{
            authState,
            signIn: singIn,
            changeIcon:ChangeIconHanlder,
            signout:singOut

        }}>
        {children}
    </AuthContext.Provider>);
}
