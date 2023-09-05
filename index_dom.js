
import { userDeviceInfo } from "./dom/deteccion_dispositivos.js";

const d=document;

//este evento nos va a permitir que nuestra funcion se ejecute a la carga del documento.
d.addEventListener("DOMContentLoaded",(e)=>{
   
    userDeviceInfo("user_device")
});



 
