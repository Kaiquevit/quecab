var menuItem = document.querySelectorAll('.itemMenu')

function selectionlink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuItem.forEach((item)=>
    item.addEventListener('click', selectionlink)
)

var btnExp =document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menuLateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})