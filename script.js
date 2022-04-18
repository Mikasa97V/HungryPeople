'use strict';
let btn = document.getElementById('BTN'),
    w = document.querySelector('.seventh_block'),
    nameInPut = document.getElementById('nameInPut');


// console.log(w.getBoundingClientRect());
btn.addEventListener('click', function(){
    console.log('h');
    scrollTo(0, 4300);
    btn.style.backgroundColor = 'red';
});
let data = {
    n: nameInPut.value
}
let no = [
    data
]
    let btnBookNow = document.getElementById('btnBookNow');
    btnBookNow.addEventListener('click', function(){
    console.log(nameInPut.value);
    localStorage.setItem(no + "name" + nameInPut.value, nameInPut.value);
});
// localStorage.clear();