import { AuthState } from "./AuthContext";

type AuthAction = {  type:'singIn' } | {type:'changeIcon', payload:string} | {type:'singOut'}



// def:
//los reducer deben de generar un nuevo estados
export const authReducer = ( state: AuthState, action : AuthAction  ) =>
{
          
    switch (action.type) {
        case 'singIn':
        return {...state,isLoggedIn:true,username:'Leudy Rosario'}
        case 'changeIcon':
        return {...state,favoriteIcon:action.payload}
        case 'singOut':
            return {...state,isLoggedIn:false,favoriteIcon:undefined,username:undefined}
        default:
            return state;
    }



}