import darkModeIcon from './img/dark_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import lightModeIcon from "./img/light_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg"

const darkMode  = new Image();
const lightMode = new Image();
lightMode.src = lightModeIcon ;
lightMode.style.height = "25px";
lightMode.style.width = "25px";
lightMode.style.position ="absolute";
darkMode.src = darkModeIcon;

darkMode.style.height = "25px";
darkMode.style.width = "25px";
darkMode.style.fill = "black";
export {darkMode ,lightMode} ;