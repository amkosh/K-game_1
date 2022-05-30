function flipGameLoad(){
    pgStyles();
    pairCount = 0;

    for(i = 0; i < 10; i++){
        let nextWord = words[getRandomInt(0, words.length-1)];

        while(pics.indexOf(nextWord) != -1){
            nextWord = words[getRandomInt(0, words.length-1)];
        }
        pics.push(nextWord);
    }
    pics.forEach(e => pics.push(e));
    shuffle(pics);

    for(i = 0; i < 20; i++){
        //Контейнер, в котором хранятся карточки
        let container = document.createElement('div');
        container.className = 'flip__card';
        container.id = words.indexOf(pics[i]);
        container.addEventListener('click', () => { flip(container); });

        //Рубашка
        let card_face = document.createElement('div');
        card_face.className = 'flip__card__face flip__card__face--front card__pair';

        //Картинка
        let card_back = document.createElement('img');
        card_back.className = 'flip__card__face flip__card__face--back picture__pair';
        card_back.src = 'media/' + words.indexOf(pics[i]) + '.jpg';

        container.appendChild(card_face);
        container.appendChild(card_back);
        stack.appendChild(container);
    }
}

let currentCard = null;
let prevCard = null;
let pairCount = 0;
let cards = [];

function flip(currentCard){
    currentCard.classList.toggle('is-flipped');

    if(prevCard == null){
        prevCard = currentCard;        
        return;
    }

    if(prevCard.id == currentCard.id){
        setTimeout(() => {  
            currentCard.className = 'hidden';
            currentCard.innerHTML = '';
            prevCard.className = 'hidden';
            prevCard.innerHTML = '';
            prevCard = null;
        }, 1000);
        if(++pairCount == 10){
            flipGameLoad();
        }
    } else {
        setTimeout(() => {  
            currentCard.classList.toggle('is-flipped');
            prevCard.classList.toggle('is-flipped');
            prevCard = null;
        }, 1000);        
    }


}