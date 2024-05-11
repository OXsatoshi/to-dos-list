import './styles.css'
import { darkMode ,lightMode} from './iconImageGenerator';
const rootStyles = getComputedStyle(document.documentElement);
const whiteThmeColor = rootStyles.getPropertyValue('--white-theme');
const darkThemeColor = rootStyles.getPropertyValue('--dark-theme');

const toggle = document.querySelector('input');
const themeSwitcher = document.querySelector('.theme-switcher');
themeSwitcher.appendChild(darkMode);
document.querySelector('body').style.backgroundColor = whiteThmeColor;
document.querySelector('body').style.color = rootStyles.getPropertyValue('--light-theme-font-color')
const cercle = document.querySelector('.cercle');
toggle.addEventListener('change',()=>{
    if(toggle.checked){
            cercle.classList.add('moved');
            document.querySelector('body').style.backgroundColor = darkThemeColor;
            themeSwitcher.removeChild(darkMode);
            themeSwitcher.appendChild(lightMode);
            document.querySelector('body').style.color = rootStyles.getPropertyValue('--dark-theme-font-color');
    }
    else {
            cercle.classList.remove('moved');
            themeSwitcher.removeChild(lightMode);
            themeSwitcher.appendChild(darkMode);
            document.querySelector('body').style.backgroundColor = whiteThmeColor;
            document.querySelector('body').style.color = rootStyles.getPropertyValue('--light-theme-font-color');
    }

})

console.log(darkThemeColor)
