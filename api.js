//Aqui se realizara la conexion al Api Rest del Backend y se devolvera su resultado
import config from "./config";

const dirApi = config.ALLUSERS;//Direccion de heroku con el servidor y bd


export const obtenerUsuario = async () => { //Funcion flecha que devuelve todos los usuarios del backend PERN
    const res = await fetch(dirApi); //Aqui se realiza la consulta al API
    return await res.json(); //retorna el resulatdo en formato json
};
