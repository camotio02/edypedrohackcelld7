var links = document.querySelector('div.links');
const showMenu = () => {
    links.classList.add("shows");
}
const closemenu = () => {
    links.classList.remove("shows");
}
const showAdminItens = () => {
    var signo = prompt("Você deseja entrar no modo admin ou quer saber a sua idade");
    if (signo.toLowerCase() == "idade") {
        var idade = prompt("Que ano você nasceu?");
        const idadeFormatado = parseInt(idade);
        if (idadeFormatado) {
            const resultIdade = 2022 - idadeFormatado;
            alert(`Você é o melhor, quer saber a sua idade? Tens ${resultIdade} anos de idade!`)
        } else {
            alert('Você não digitou nada ou digitou uma letra.kkkk')
        }
    } else if (signo.toLowerCase() == "admin") {
        var senha = prompt("Digite a sua senha por favor");

        if (senha.toLowerCase() == "camotio32") {
            setTimeout(function () {
                alert('Você está entrando no modo admin, click ok ou fechar para entrar no modo!')
                window.location.href = 'admin.html'
            }, 2000)
        } else {
            alert(`"${senha}" ----> não é uma senha correta. Por favor insira uma senha correta!`)
            return senha(senha)
        }
    } else {
        alert('Não digitou nem idade ne admin pts!')
    }
}
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
   `)