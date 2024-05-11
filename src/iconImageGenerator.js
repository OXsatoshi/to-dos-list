import darkModeIcon from './img/dark_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import lightModeIcon from "./img/light_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import menuForDarkMode from "./img/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import menuForWhiteMode from "./img/menu_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg";
function setWidthOfImage(img,width){
    img.style.width = width;
}
function setHeightOfImage(img,height){
    img.style.width = height;
}
const darkMode  = new Image();
const lightMode = new Image();
const menuIconForWhite = new Image();
const menuIconForDark = new Image();
menuIconForDark.src = menuForDarkMode;
menuIconForWhite.src = menuForWhiteMode;
lightMode.src = lightModeIcon ;
darkMode.src = darkModeIcon;
setHeightOfImage(lightMode,"25px");
setWidthOfImage(lightMode,"25px");
setHeightOfImage(darkMode,"25px");
setWidthOfImage( darkMode,"25px");
setHeightOfImage(menuIconForDark,"70px");
setHeightOfImage(menuIconForWhite,"70px");

lightMode.style.position ="absolute";



export {darkMode ,lightMode,menuIconForWhite,menuIconForDark} ;