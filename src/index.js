import './styles.css'

import { handleLightTheme,handleDarkTheme } from './themeChangeHandler';
import { menuIconForDark, menuIconForWhite } from './iconImageGenerator';
import { displaySideMenu } from './sideBare';
const pageLoad = false;
handleLightTheme(pageLoad);

const toggle = document.querySelector('input#theme-toggle');
const menuCheckbox = document.querySelector('#menu-hide');
displaySideMenu();
menuCheckbox.addEventListener("change",()=>{
    if(menuCheckbox.checked){
        console.log('hide menu')
    }else{
        console.log('show menu');
    }
})
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


