var links = document.querySelector('div.links');
const showMenu = () => {
    links.classList.add("shows");
}
const closemenu = () => {
    links.classList.remove("shows");
}
const showAdminItens = () => {
    const admin = window.prompt('digete a sua senha de administrador por favor!').value
    if (!admin) {
        alert('você não digitou nada, por favor insira sua senha')
    } else if (admin == 'camotio') {
        var senha = window.prompt('digete a sua senha de administrador por favor!').value
    } else {
        return
    }
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
  }).reveal(`
   `)