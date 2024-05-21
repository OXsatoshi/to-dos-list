import {lock} from './lock';
function handleAddingProject(){


    lock = false;
}
function handleCancel(){

    lock=false;
}
function renderNewProjectUi(){
    const div = document.createElement('div');
    const input = document.createElement('input');
    div.classList.add("new-project-ui")
    input.type = 'text';
    const buttonsBox = document.createElement('div');
    const addButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    buttonsBox.classList.add('button-box');
    addButton.classList.add('add-button');
    cancelButton.classList.add('cancel-button');
    addButton.textContent = 'Add';
    cancelButton.textContent = "Cancel";
    addButton.addEventListener('click',handleAddingProject);
    cancelButton.addEventListener('click',handleCancel);
    input.placeholder = "Enter the new Porject Name";
    buttonsBox.appendChild(addButton);
    buttonsBox.appendChild(cancelButton);
    div.appendChild(input);
    div.appendChild(buttonsBox);
    return div;
    
}
export  {renderNewProjectUi}