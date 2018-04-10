// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select size input
const gridHeight = document.querySelector('#inputHeight'); //wysokosc tabeli
const gridWitdh = document.querySelector('#inputWeight'); //szerokosc tabeli
const sizePicker = document.querySelector('#sizePicker');
const table = document.querySelector('#pixelCanvas');
let isClicked = false;

// check for click
table.addEventListener('mousedown', function(e){
    e.preventDefault();
    isClicked = true;
});

table.addEventListener('mouseup', function(e){
    e.preventDefault();
    isClicked = false;
});


// color set function on mouseover
function colorSet() {
    table.addEventListener('mouseover', function(e){
        e.preventDefault();
        if(isClicked === true) {
            if(e.target.nodeName === 'TD'){
                e.target.style.backgroundColor = colorPicker.value;
            }
        }
    });
}

//set color on click
function colorClick() {
    table.addEventListener('click', function(e){
        e.preventDefault();
            if(e.target.nodeName === 'TD'){
                e.target.style.backgroundColor = colorPicker.value;
            }
    });
}

// remove color function
function colorRemove() {
    table.addEventListener('dblclick', function(e){
        e.preventDefault();
        if(e.target.nodeName === 'TD'){
            e.target.style.backgroundColor = null;
        }
    });
}

// When size is submitted by the user, call makeGrid()
function makeGrid(){

    table.innerHTML =''; //czyszczenie tabeli

    const fragment = document.createDocumentFragment(); // DocumentFragment wrapper

    for(let h = 0; h < gridHeight.value; h++){
        let tr = document.createElement('tr');
        fragment.appendChild(tr);
        for(let w = 0; w < gridWitdh.value; w++){
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
    table.appendChild(fragment);
    colorSet();
    colorClick();
    colorRemove();
}

sizePicker.addEventListener('submit',function(e){
    e.preventDefault();
    makeGrid();
});