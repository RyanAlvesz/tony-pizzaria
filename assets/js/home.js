'use strict'

const selecionarPizza = () => {

    const pizzas = document.getElementsByClassName('pizza-favorita')

    for (let pizza of pizzas){

        pizza.addEventListener('click', () => {

            sessionStorage.setItem('imagemPizza', pizza.classList[1])
            sessionStorage.setItem('nomePizza', pizza.children[0].children[1].textContent)
            sessionStorage.setItem('precoPizza', pizza.children[0].children[0].textContent)

        })

    }

}

const montarUsuario = () => {

    let nomeUsuario = sessionStorage.getItem('nome')
    let imagem = sessionStorage.getItem('imagem')

    const foto = document.getElementById('foto-usuario')
    const nome = document.getElementById('nome-usuario')

    if(!nomeUsuario && !imagem){
        nomeUsuario = 'Celso'
        imagem = '../img/celso.webp'
        sessionStorage.setItem('nome', nomeUsuario)
        sessionStorage.setItem('imagem', imagem)
    }

    foto.src = imagem
    foto.alt = nome
    nome.textContent = `Bom dia, ${nomeUsuario}`

}

const bebidas = document.getElementById('bebidas')

bebidas.addEventListener('click', () => {

        window.location.href = '#bebidas'

})

montarUsuario()
selecionarPizza()