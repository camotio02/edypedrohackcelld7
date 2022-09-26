var links = document.querySelector('div.links');
const showMenu = () => {
    links.style.display = 'flex';
}
const closemenu = () => {
    links.style.display = 'none';
}
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
  }).reveal(`
   `)