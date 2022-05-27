//Увеличиваем область задания
//--настраиваем цветовую схему
function wgStyles(){
    document.body.style.background = '#EF7663';
    task.style.background = '#F7B78C';
    task.style.height = '50%';
    stack.style.height = '50%';
    //stack.style.background = '#E7E1C4';
}


//Рисуем страницу с игрой
function wordGameLoad(){
    wgStyles();
    task.innerHTML = '';
    stack.innerHTML = '';
    stack.className = 'stack__words';

    //Загружаем картинку в область просмотра (task)
    word = words[getRandomInt(0, words.length-1)];
    let picNum = words.indexOf(word);
    let img = document.createElement('img');
    img.alt = word;
    img.src = 'media/' + picNum + '.jpg';
    img.className = 'picture_words';
    task.appendChild(img);

    //Загружаем карточки
    let cardWord = [];
    //Добавляем в массив с ответами слово-отгадку
    cardWord.push(word);
    //Добавляем остальные слова
    for(i = 0; i < 9; i++){
        let wWord = words[getRandomInt(0, words.length-1)];
        while(word == wWord){
            wWord = words[getRandomInt(0, words.length-1)];
        }
        cardWord.push(wWord);
    }

    //Перемешиваем слова
    cardWord = shuffle(cardWord);

    for(i = 0; i < cardWord.length; i++){
        let card = document.createElement('div');
        card.className = 'card__words';
        card.innerText = cardWord[i];
        card.id = 'card__words';
        document.getElementById('stack').appendChild(card);
        card.addEventListener('click', pressWord);
    }    
}

//Пишем проверку при клике на карточке
function pressWord(event){
    let pressed = event.target.innerText;

    for(card of document.querySelectorAll('#card__words')){
        card.className = 'card__words';
    }
    if(pressed == word){
        //convertTextToSpeech('Правильно!');
        convertTextToSpeech(word);
        for(card of document.querySelectorAll('#card__words')){
            card.removeEventListener('click', pressWord);
        }
        event.target.className = 'card__words__right';
        setTimeout(() => {  wordGameLoad(); }, 3000);
    } else {
        sounds[33].play();
        event.target.className = 'card__words__wrong';
    }
}
//Реакция на правильный ответ