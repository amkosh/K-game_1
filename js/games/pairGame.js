let pics = [];
let flipCards = [];

function pgStyles(){
    document.body.style.background = '#63A91F';
    task.innerHTML = '';
    stack.innerHTML = '';
    task.className = 'hidden';
    stack.style.height = '100%';
    stack.className = 'stack__pair'
}

function pairGameLoad(){
    pgStyles();
    pics = [];
    flipCards = [];
    pairCount = 0;

    //Заполним массив словами
    
    for(i = 0; i < 10; i++){
        let nextWord = words[getRandomInt(0, words.length-1)];

        while(pics.indexOf(nextWord) != -1){
            nextWord = words[getRandomInt(0, words.length-1)];
        }
        pics.push(nextWord);
    }
    pics.concat(pics);

    for(i = 0; i < 10; i++){
        let img = document.createElement('img');
        img.src = 'media/' + words.indexOf(pics[i]) + '.jpg';
        img.className = 'picture__pair';

        let card = document.createElement('div');
        card.id = i;
        card.addEventListener('click', pressPair);
        card.className = 'card__pair';
        card.appendChild(img);
        flipCards.push(card);

        let imgTwin = document.createElement('img');
        imgTwin.src = 'media/' + words.indexOf(pics[i]) + '.jpg';
        imgTwin.className = 'picture__pair';

        let cardTwin = document.createElement('div');
        cardTwin.id = i;
        cardTwin.addEventListener('click', pressPair);
        cardTwin.className = 'card__pair';
        cardTwin.appendChild(imgTwin);
        flipCards.push(cardTwin);
    }
    shuffle(flipCards);

    for(i = 0; i < 20; i++){
        stack.appendChild(flipCards[i]);
    }
}

//let currentCard = null;
//let prevCard = null;
//let pairCount = 0;

function pressPair(event){
    for(card of document.querySelectorAll('.card__pair__wrong')){
        card.className = 'card__pair';
      }

    if(prevCard == null){
        prevCard = event.path[1];
        prevCard.removeEventListener('click', pressPair);
        return;
    }
    currentCard = event.path[1];
    if(prevCard.id == currentCard.id){
        console.log('Success!' + prevCard)
        prevCard.className = 'hidden';
        prevCard.innerHTML = '';
        currentCard.className = 'hidden';
        currentCard.innerHTML = '';
        currentCard = null;
        prevCard = null;
        if(++pairCount == 10){
            pairGameLoad();
        }
    } else {
        console.log('Fail!' + currentCard);
        prevCard.addEventListener('click', pressPair);
        prevCard.className = 'card__pair__wrong';
        currentCard.className = 'card__pair__wrong';
        prevCard = null;
        currentCard = null;
    }
}