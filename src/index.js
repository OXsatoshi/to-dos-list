import './styles.css'
import darkModeIcon from './img/dark_mode_24dp_FILL0_wght400_GRAD0_opsz24.png'
const rootStyles = getComputedStyle(document.documentElement);
const whiteThmeColor = rootStyles.getPropertyValue('--white-theme');
const darkThemeColor = rootStyles.getPropertyValue('--dark-theme');
document.querySelector('body').style.backgroundColor = darkThemeColor;
const toggle = document.querySelector('input');
const cercle = document.querySelector('.cercle');
toggle.addEventListener('change',()=>{
    if(toggle.checked){
            cercle.classList.add('moved');
            document.querySelector('body').style.backgroundColor = darkThemeColor;

    }
    else {
            cercle.classList.remove('moved');
            document.querySelector('body').style.backgroundColor = whiteThmeColor;

    }

})

console.log(darkThemeColor)
