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