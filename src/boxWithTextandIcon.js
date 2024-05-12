

function renderBoxWithTextIcon(text,icon,id){
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = text;
    const image = new Image();
    image.src = icon ;
    div.appendChild(image);
    div.appendChild(span);
    div.id = id;
    return div;

}
export {renderBoxWithTextIcon};