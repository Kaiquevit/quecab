const grid =document.querySelector('.grid');
const spanJogador = document.querySelector('.player');
const timer = document.querySelector('.timer')
const chacracters =[
  'chopper',
  'luffy',
  'Pikachu',
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
  'charmander',
];

const createElement = (tag, className)=>{
    const element = document.createElement(tag);
    element.className = className;
    return  element;
}
let PrimeiraC='';
let SegudaC ='';

const fimDoJogo=()=>{
  const cartaAcertada = document.querySelectorAll('.acertouCarta');

  if(cartaAcertada.length ===30){
    clearInterval(this.loop);
    alert(`Parabens,${spanJogador.innerHTML}!! você encontou o one piece hein: ${timer.innerHTML}segundos(^-^)`);
  }
}
const confiraCartas =()=>{


  const  firstCharacter = PrimeiraC.getAttribute('data-chacracters');
  const  SecondCharacter = SegudaC.getAttribute('data-chacracters');


  if(firstCharacter ===SecondCharacter) {


    PrimeiraC.firstChild.classList.add('acertouCarta');
    SegudaC.firstChild.classList.add('acertouCarta');


    PrimeiraC='';
    SegudaC ='';


    fimDoJogo();

}else{

  setTimeout(()=>{
    PrimeiraC.classList.remove('revela-carta');
    SegudaC.classList.remove('revela-carta');

     PrimeiraC='';
     SegudaC ='';

  } ,500)
   
}
}

const revealCard =({target})=>{
  if(target.parentNode.className.includes('revela-carta'))
  {
    return;
  }
  if(PrimeiraC===''){
    target.parentNode.classList.add('revela-carta');
    PrimeiraC= target.parentNode;
  }else if(SegudaC ===''){
    target.parentNode.classList.add('revela-carta');
    SegudaC= target.parentNode;

    confiraCartas();
  }
    
}
const createCard = (chacracters) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');
  
    front.style.backgroundImage = `url('../images/${chacracters}.png')`;
  
    card.appendChild(front);
    card.appendChild(back);
  

    card.addEventListener('click', revealCard)
    card.setAttribute('data-chacracters', chacracters);
    return card;
  }

const loadGame = ()=>{
  const duplicateCharacters =[ ...chacracters,...chacracters ];

  const shuffleArray = duplicateCharacters.sort(()=> Math.random()-0.5);
  
  shuffleArray.forEach((chacracters) => {
        const card = createCard(chacracters);
        grid.appendChild(card);

    });
}
const start = ()=>{


  this.loop=setInterval(()=>{
    const currentTimer = Number(timer.innerHTML);
    timer.innerHTML= currentTimer+1;
  },1000)
}

window.onload =() =>{
  spanJogador.innerHTML =localStorage.getItem('player');
  start ();
  loadGame();
}

