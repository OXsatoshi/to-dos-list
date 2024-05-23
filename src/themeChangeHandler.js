import {
  darkMode,
  lightMode,
  menuIconForWhite,
  menuIconForDark,
} from "./iconImageGenerator";
import "./styles.css";

const rootStyles = getComputedStyle(document.documentElement);
const whiteThmeColor = rootStyles.getPropertyValue("--white-theme");
const darkThemeColor = rootStyles.getPropertyValue("--dark-theme");
const themeSwitcher = document.querySelector(".theme-switcher");
const cercle = document.querySelector(".cercle");
function handleLightTheme(inPageLoad) {
  cercle.classList.remove("moved");
  if (inPageLoad) {
    themeSwitcher.removeChild(lightMode);
    document.querySelector(".left-side").removeChild(menuIconForDark);
  } else {
  }
  themeSwitcher.appendChild(darkMode);

  document.querySelector("body").style.backgroundColor = whiteThmeColor;
  document.querySelector("body").style.color = rootStyles.getPropertyValue(
    "--light-theme-font-color"
  );
}
function handleDarkTheme() {
  cercle.classList.add("moved");
  document.querySelector("body").style.backgroundColor = darkThemeColor;
  document.querySelector(".left-side").removeChild(menuIconForWhite);
  document.querySelector(".left-side").appendChild(menuIconForDark);
  themeSwitcher.appendChild(lightMode);

  document.querySelector("body").style.color = rootStyles.getPropertyValue(
    "--dark-theme-font-color"
  );
}
export { handleLightTheme, handleDarkTheme };
