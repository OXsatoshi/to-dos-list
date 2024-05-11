import './styles.css'

import { handleLightTheme,handleDarkTheme } from './themeChangeHandler';
const pageLoad = false;
handleLightTheme(pageLoad);

const toggle = document.querySelector('input');
toggle.addEventListener('change',()=>{
    if(toggle.checked){
          handleDarkTheme();
    }
    else {

         handleLightTheme(!pageLoad);
    }

})

console.log(darkThemeColor)
