// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select size input
const gridHeight = document.querySelector('#inputHeight'); //wysokosc tabeli
const gridWitdh = document.querySelector('#inputWeight'); //szerokosc tabeli
const sizePicker = document.querySelector('#sizePicker');
const table = document.querySelector('#pixelCanvas');

// colro set function
function colorSet() {
    table.addEventListener('click', function(e){
        e.preventDefault();
        if(e.target.nodeName === 'TD'){
            e.target.style.backgroundColor = colorPicker.value;
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
}

sizePicker.addEventListener('submit',function(e){
    e.preventDefault();
    makeGrid();
});