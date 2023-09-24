const grid =document.querySelector('.grid');

const chacracters =[
  'Aqua',
  'Aqua2',
  'carinha',
  'charmander',
  'chopper',
  'luffy',
  'rick',
  'pickle-rick',
  'Pikachu',
  'Power',
  'Megumisad',
  'one 1',
  'one 2',
  'one 3',
  'one 4',
  'one 5',
  'one 6',
  'one 7',
  'one 8',
  'one 9',
  'one 10',
  'chapeu',
];

const createElement = (tag, className)=>{
    const element = document.createElement(tag);
    element.className = className;
    return  element;
}
const createCard = (chacracters) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');
  
    front.style.backgroundImage = `url('../images/${chacracters}.png')`;
  
    card.appendChild(front);
    card.appendChild(back);
  

  
    return card;
  }

const loadGame =()=>{
    chacracters.forEach((chacracters) => {

        const card = createCard(chacracters);
        grid.appendChild(card);

    });
}
loadGame();