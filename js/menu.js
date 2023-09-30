window.addEventListener('scroll', function(){
    let rolagem= document.querySelector('#header')
    rolagem.classList.toggle('rolagem1',this.window.scrollY>0)
})