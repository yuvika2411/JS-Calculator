let currentDisplay='';
document.querySelector('#display').value= currentDisplay;

function clearDisplay(){
    currentDisplay=' ';
    document.querySelector('#display').value= currentDisplay;
}

function one(){
    currentDisplay= currentDisplay+1;
    document.querySelector('#display').value= currentDisplay;
}

function two(){
    currentDisplay= currentDisplay+2;
    document.querySelector('#display').value= currentDisplay;
}

function three(){
    currentDisplay= currentDisplay+3;
    document.querySelector('#display').value= currentDisplay;
}

function four(){
    currentDisplay= currentDisplay+4;
    document.querySelector('#display').value= currentDisplay;
}

function five(){
    currentDisplay= currentDisplay+5;
    document.querySelector('#display').value= currentDisplay;
}

function six(){
    currentDisplay= currentDisplay+6;
    document.querySelector('#display').value= currentDisplay;
}

function seven(){
    currentDisplay= currentDisplay+7;
    document.querySelector('#display').value= currentDisplay;
}

function eight(){
    currentDisplay= currentDisplay+8;
    document.querySelector('#display').value= currentDisplay;
}

function nine(){
    currentDisplay= currentDisplay+9;
    document.querySelector('#display').value= currentDisplay;
}

function zero(){
    currentDisplay= currentDisplay+0;
    document.querySelector('#display').value= currentDisplay;
}

function equalto(){
    let result= eval(currentDisplay);
    currentDisplay= result;
    document.querySelector('#display').value= currentDisplay;
}

function add(){
    currentDisplay= currentDisplay+'+';
    document.querySelector('#display').value= currentDisplay;
}

function subtract(){
    currentDisplay= currentDisplay+'-';
    document.querySelector('#display').value= currentDisplay;
}

function divide(){
    currentDisplay= currentDisplay+'/';
    document.querySelector('#display').value= currentDisplay;
}

function multiply(){
    currentDisplay= currentDisplay+'*';
    document.querySelector('#display').value= currentDisplay;
}

function decimal(){
    currentDisplay= currentDisplay+'.';
    document.querySelector('#display').value= currentDisplay;
}

function deletelast(){
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
}