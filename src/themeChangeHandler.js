import { darkMode ,lightMode} from './iconImageGenerator';
import './styles.css';

const rootStyles = getComputedStyle(document.documentElement);
const whiteThmeColor = rootStyles.getPropertyValue('--white-theme');
const darkThemeColor = rootStyles.getPropertyValue('--dark-theme');
const themeSwitcher = document.querySelector('.theme-switcher');
const cercle = document.querySelector('.cercle');
function handleLightTheme(inPageLoad){
            cercle.classList.remove('moved');
            if(inPageLoad){
                themeSwitcher.removeChild(lightMode);
            }
            else{}
            themeSwitcher.appendChild(darkMode);
            document.querySelector('body').style.backgroundColor = whiteThmeColor;
            document.querySelector('body').style.color = rootStyles.getPropertyValue('--light-theme-font-color');
}   
function handleDarkTheme(){
    cercle.classList.add('moved');
    document.querySelector('body').style.backgroundColor = darkThemeColor;
    themeSwitcher.appendChild(lightMode);
    document.querySelector('body').style.color = rootStyles.getPropertyValue('--dark-theme-font-color');
}
export {handleLightTheme,handleDarkTheme};