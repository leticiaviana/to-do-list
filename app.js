const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn'); 
const container = document.querySelector('.grocery-container'); 
const list = document.querySelector('.grocery-list'); 
const clearBtn = document.querySelector('.clear-btn'); 

let editElement;
let editFlag = false;
let editID = '';

form.addEventListener('submit', addItem);


function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        console.log('add item to the list');
    }
    else if(value && editFlag){
        console.log('editing');
    } else{
        alert.textContent = 'empty value';
        alert.classList.add('alert-danger');
    }
}
