const entrando =  document.querySelector('h1.entrando')
const counters = document.querySelector('div.counters')
const couter = document.querySelector('p.number')
const loading = document.querySelector('div.loading')
const iniciar = document.querySelector('div.iniciar')
const enter = document.querySelector('div.enter')
const miniinfo = document.querySelector('p.niniinfo')
const edy = document.querySelector('img.edy')
const containerLoop = document.querySelector('div.containerLoop')

const entrar = () => {
    iniciar.style.display = "none";
    entrando.innerHTML = "Entrando";
    counters.style.opacity = "1";
    loading.style.opacity = "1";
    setTimeout(function () {
        entrando.innerHTML = "Entrando.";
        couter.innerHTML = "1";
    }, 1000)
    setTimeout(function () {
        entrando.innerHTML = "Entrando..";
        couter.innerHTML = "2";
    }, 2000)
    setTimeout(function () {
        entrando.innerHTML = "Entrando...";
        couter.innerHTML = "3";
    }, 3000)
    setTimeout(function () {
        entrando.innerHTML = "Entrando.";
        couter.innerHTML = "4";
    }, 4000)
    setTimeout(function () {
        entrando.innerHTML = "Entrando..";
        couter.innerHTML = "5";
    }, 5000)
    setTimeout(function () {
        entrando.innerHTML = "Entrando...";
        couter.innerHTML = "6";
    }, 6000)
    setTimeout(function () {
        entrando.innerHTML = "Entrando.";
        couter.innerHTML = "7";
    }, 7000)
    setTimeout(function () {
        entrando.innerHTML = "Entrando..";
        couter.innerHTML = "8";
    }, 8000)
    setTimeout(function () {
        entrando.innerHTML = "Entrando...";
        couter.innerHTML = "9";
    }, 9000)
    setTimeout(function () {
        entrando.innerHTML = "Entrando....";
        couter.innerHTML = "10";
    }, 10000)
    setTimeout(function () {
        entrando.innerHTML = "HACKCELLD7";
        counters.style.opacity = "0";
        loading.style.opacity = "0";
        enter.style.display = "flex";
        edy.style.opacity = "1";
    }, 11000)
    setTimeout(function () {
        miniinfo.classList.add("niniinfoshows");
    }, 11500)

} 
const continuar = () => {
    containerLoop.style.display = "none";
    setTimeout(function () {
        alert('Concorda em usar os cookies deste site? confirme para continuar a sua navegação.')
        window.location.href = 'home.html'
    }, 1000)
}