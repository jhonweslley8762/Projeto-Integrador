let barra = document.getElementById('barra')
let bolinha = document.getElementById('bolinha')
let header = document.getElementById('header-principal')
let mesa = document.getElementById('abrirMesa');
let ficha = document.getElementById('abrirFicha')
let ativo = false;

mesa.addEventListener('click', function(){
    document.location.href = "html/mesaPag.html"
})

ficha.addEventListener('click', function(){
    document.location.href = "html/fichaPag.html"
})

barra.addEventListener('click', function(){
    if (!ativo){
        document.body.style.background =  "black";
        ativo = true;
        header.classList.toggle('header-modo');
        header.classList.toggle('header');
    } else {
        document.body.style.background =  "white";
        ativo = false;
        header.classList.toggle('header-modo');
        header.classList.toggle('header');
    }
    bolinha.classList.toggle('açao');
    barra.classList.toggle('açaoFundo')
})


