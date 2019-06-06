import { Link } from 'react-router-dom';
import Axios from 'axios';
export const UsuarioAutenticado =()=>localStorage.getItem("spmed-usuario") !=null;

export const parseJwt = () =>{
    var base64Url = localStorage.getItem("spmed-usuario").split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    
    return JSON.parse(window.atob(base64));
}
export const decode=()=>{
    let jwtdecode = require('jwt-decode');
    let decode = jwtdecode(localStorage.getItem("spmed-usuario"));
    let permissao = decode.tipo;

    return(permissao);
}

const api = Axios.create({
    baseURL:'http://192.168.3.48:5000/api'
});

export default api;



        
   
