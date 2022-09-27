var links = document.querySelector('div.links');
const showMenu = () => {
    links.classList.add("shows");
}
const closemenu = () => {
    links.classList.remove("shows");
}
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
  }).reveal(`
   `)