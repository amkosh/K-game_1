const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const nums = '0123456789';
const task = document.getElementById('task');

taskLoad();

//Заполняем задание
function taskLoad(){
  let word = words[getRandomInt(0, words.length-1)];
  task.innerHTML = '';

  for(i = 0; i < word.length; i++){
    let letter = word[i];
    let element = document.createElement('p');
    element.className = 'unsolved';
    element.innerText = letter;
    task.appendChild(element);
  }
}

//Рисуем карточки
for(i = 1; i <= 20; i++){
  let card = document.createElement('div');
  card.className = 'card';
  card.innerText = i;
  card.id = i;
  document.getElementById('stack').appendChild(card);
  card.addEventListener('click', press);
}

function press(event){
  document.getElementById('task').innerText = event.target.id;
}

//Рандомное целое число
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}