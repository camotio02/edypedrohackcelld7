var links = document.querySelector('div.links');
var closemenu = document.querySelector('div.closemenu')
const showMenu = () => {
    links.style.display = 'flex';
    closemenu.style.display = 'none';
}
const closemenu = () => {
    links.style.display = 'none';
    closemenu.style.display = 'none';
}
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
  }).reveal(`
   `)