import hamburgerMenu  from "./dom/menu_hamburgues.js";
import {digitalClock,alarma} from './dom/reloj.js'
import { moveBall } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import {scroll} from "./dom/boton_scroll.js"
import { darkTheme } from "./dom/tema_oscuro.js";
import { responsiveMedia } from "./dom/objeto_responsive.js";
import { responsiveTester } from "./dom/prueba_responsive.js";
import { userDeviceInfo } from "./dom/deteccion_dispositivos.js";

const d=document;

//este evento nos va a permitir que nuestra funcion se ejecute a la carga del documento.
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarma("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","May23,2024 03:23:19","Feliz cumpleaños🤓");
    scroll(".scroll-top-btn");
    responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/8pmpsXAqoYzripXY8" target='blank' >Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.
    3307860711245!2d-99.16888681164576!3d19.42702312496523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
    1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2scu!4v1693865818205
    !5m2!1ses!2scu" width="600"
     height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    responsiveTester("responsive_tester");
    userDeviceInfo("user_device")
});

//evento del teclado.
 d.addEventListener("keydown",e=>{
    moveBall(e,".ball",".stage");
 })
 
 //funcion para la ejecucion del tema en oscuro.
 darkTheme(".dark-theme-btn","dark-mode"); 


 