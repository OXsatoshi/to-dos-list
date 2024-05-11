import './styles.css'

import { handleLightTheme,handleDarkTheme } from './themeChangeHandler';
import { menuIconForDark, menuIconForWhite } from './iconImageGenerator';
const pageLoad = false;
handleLightTheme(pageLoad);

const toggle = document.querySelector('input');
document.querySelector(".left-side").appendChild(menuIconForWhite);

toggle.addEventListener('change',()=>{
    if(toggle.checked){
          handleDarkTheme();
          document.querySelector(".left-side").appendChild(menuIconForDark);

    }
    else {

         handleLightTheme(!pageLoad);
         document.querySelector(".left-side").appendChild(menuIconForWhite);

    }

})


