const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const nums = '0123456789';
const task = document.getElementById('task');
const stack = document.getElementById('stack');
let word = '';
let cursor = 0;
taskLoad();

//Заполняем задание
function taskLoad(){
  word = words[getRandomInt(0, words.length-1)];
  task.innerHTML = '';
  stack.innerHTML = '';
  stack.className = 'stack';

  for(i = 0; i < word.length; i++){
    let letter = word[i];
    let element = document.createElement('p');
    if(i == 0){
      element.className = 'active';
    } else {
      element.className = 'unsolved';
    }
    
    element.id = 'taskCard';
    element.innerText = letter;
    task.appendChild(element);
  }
  drawCards();
}

//Рисуем карточки
function drawCards(){
  let cardWord = Array.from(word);
  let c = (20-cardWord.length);

  //Добавляем дополнительные буквы
  for(i = 0; i < c; i++){
    cardWord.push(alphabet[getRandomInt(0,32)]);
  }
  cardWord = shuffle(cardWord);

  //Рисуем и добавляем карточки
  for(i = 0; i < 20; i++){
    let card = document.createElement('div');
    card.className = 'card';
    card.innerText = cardWord[i];
    card.id = 'card';
    document.getElementById('stack').appendChild(card);
    card.addEventListener('click', press);
  }

}

//Обрабатываем нажатие
function press(event){
  let pressed = event.target.innerText;
  let curTask = task.querySelectorAll('#taskCard');

  for(card of document.querySelectorAll('#card')){
    card.className = 'card';
  }

  if(pressed == curTask[cursor].innerText){
    sounds[alphabet.indexOf(pressed)].play();
    curTask[cursor].className = 'solved';
    event.target.className = 'card__right';
    event.target.style.visibility = 'hidden';
    if(curTask[++cursor]){
      curTask[cursor].className = 'active';
    }
    
  } else {
    sounds[33].play();
    event.target.className = 'card__wrong';
  }

  if(cursor >= curTask.length){
    cursor = 0;
    answer();
    //taskLoad();
  }
}

//Загрузка картинки
function answer(){
  let picNum = words.indexOf(word);
  stack.innerHTML = '';
  stack.className = 'answer';

  let img = document.createElement('img');
  img.alt = word;
  img.src = 'media/' + picNum + '.jpg';
  img.className = 'picture';
  img.addEventListener('click', taskLoad);
  
  stack.appendChild(img);
  setTimeout(() => {  convertTextToSpeech(word); }, 1500);
}

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