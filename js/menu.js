const task = document.getElementById('task');
const stack = document.getElementById('stack');

task.innerHTML = '<h1>Развивашки</h1>';
stack.className = 'stack__menu';

let letterGame = document.createElement('button');
letterGame.innerText = 'ИЩЕМ БУКВЫ';
letterGame.setAttribute('onclick', 'letterGameLoad()')
letterGame.className = 'btnMenu';
stack.appendChild(letterGame);

let wordGame = document.createElement('button');
wordGame.innerText = 'ЧИТАЕМ СЛОВА';
wordGame.setAttribute('onclick', 'wordGameLoad()')
wordGame.className = 'btnMenu';
stack.appendChild(wordGame);


let pairGame = document.createElement('div');
pairGame.innerText = 'ИЩЕМ ПАРЫ';
pairGame.className = 'btnMenu';
pairGame.setAttribute('onclick', 'pairGameLoad()')
stack.appendChild(pairGame);

let flipGame = document.createElement('div');
flipGame.innerText = 'ПАМЯТЬ';
flipGame.className = 'btnMenu';
flipGame.setAttribute('onclick', 'flipGameLoad()')
stack.appendChild(flipGame);

/*
let flipGame = document.createElement('div');
flipGame.innerText = 'УЧИМ ЦВЕТА';
flipGame.className = 'btnMenu';
flipGame.setAttribute('onclick', 'flipGameLoad()')
stack.appendChild(flipGame);
*/




//Рандомное целое число
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
//Перемешивание массива
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}