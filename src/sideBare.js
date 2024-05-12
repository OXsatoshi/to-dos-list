import './styles.css';
import allTesks from './img/allTasks.svg';
import addCercle from './img/plus-circle.svg'
import {renderBoxWithTextIcon} from './boxWithTextandIcon';
const sideBareContent = [{text:"All Tasks",icon:allTesks,id:"all-tasks"},{text:"today",icon:allTesks,id:"today-task"},{text:"Next 7 Day Task",icon:allTesks,icon:allTesks,id:'week-task'},
    {text:"Important",icon:allTesks,id:"important-task"}
];
const sideBareDiv = document.querySelector("body > main > div");

function displayHomecontent(){
    const homeDiv = document.createElement('div');
    const homeTile = document.createElement('h1');
    homeTile.textContent = "Home";
    homeDiv.appendChild(homeTile);
    homeDiv.classList.add('home-box');

    sideBareContent.forEach(e=>{homeDiv.appendChild(renderBoxWithTextIcon(e.text,e.icon,e.id))});
    sideBareDiv.appendChild(homeDiv); 
}
function displayProjectContent(){
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-box');
    const projectTitle = document.createElement('h1');
    projectTitle.textContent = "Project";
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(renderBoxWithTextIcon("Add Project",addCercle,"add-project"));

    sideBareDiv.appendChild(projectDiv);
}
function displaySideMenu(){
    displayHomecontent();
    displayProjectContent();
   console.log('side-menu');
}




export {displaySideMenu};