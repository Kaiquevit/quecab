const grid =document.querySelector('.grid');
const spanJogador = document.querySelector('.player');
const timer = document.querySelector('.timer')

// nomes das imagens que peguei para o jogo
const chacracters =[
  'HA1',
  'HA2',
  'HA3',
  'HA4',
  'HA14',
  'HA5',
  'HA6',
  'HA7',
  'HA8',
  'HA9',
  'HA10',
  'HA11',
  'HA12',
  'HA13',
  'HA15',
];
   
const createElement = (tag, className)=>{
  const element = document.createElement(tag);
  element.className = className;
  return  element;
}
let PrimeiraC='';
let SegudaC ='';
//  para sabermos se o jogador acertou as cartas e depois ver se gahou o jogo
const fimDoJogo=()=>{
const cartaAcertada = document.querySelectorAll('.acertouCarta');

if(cartaAcertada.length ===30){
  clearInterval(this.loop);
  alert(`Parabens,${spanJogador.innerHTML}!! você encontou todos os personagensque amamos hein: ${timer.innerHTML}segundos(^-^)`);
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
// função do tempo
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
