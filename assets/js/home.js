'use strict'

import { listarCategorias, listarPizzas, listarPizzasFavoritas, listarBebidas, infoUsuario } from './funcoes-api.js'

const categoriasJSON = await listarCategorias()
const pizzasFavoritasJSON = await listarPizzasFavoritas()
const pizzasRecomendadasJSON = await listarPizzas()
const bebibasCompraJSON = await listarBebidas()

const montarUsuario = async() => {
    
    let usuarioID = localStorage.getItem('usuarioID')
    let usuario = await infoUsuario(usuarioID)
    
    const foto = document.getElementById('foto-usuario')
    const nome = document.getElementById('nome-usuario')

    foto.src = `../${usuario.foto}`
    foto.alt = usuario.nome
    nome.textContent = `Bom dia, ${usuario.nome}`

}

const criarCategorias = (categoria) => {

    const li = document.createElement('li')
    const button = document.createElement('button')
    button.classList.add('categoria')
    const img = document.createElement('img')
    img.src = `../img/${categoria.imagem}`
    img.alt = categoria.nome
    
    li.appendChild(button)
    button.appendChild(img)

    const container = document.getElementById('container-categorias')
    container.appendChild(li)

}

const criarPizzasFavoritas = (pizza) => {

    const button = document.createElement('button')
    button.classList.add('pizza-favorita')
    button.style.backgroundImage = `url(../img${pizza.imagem})`
    button.id = pizza.id

    const a = document.createElement('a')
    a.href = './pizza.html'

    const span = document.createElement('span')
    span.textContent = `R$ ${pizza.preco}`
    span.classList.add('preco')

    const p = document.createElement('p')
    p.textContent = pizza.nome
    p.classList.add('nome-pizza')

    button.appendChild(a)
    a.replaceChildren(span, p)

    const pizzaContainer = document.getElementById('pizzas-favoritas')
    pizzaContainer.appendChild(button)

}

const criarPizzasRecomendadas = (pizza) => {

    const button = document.createElement('button')
    button.classList.add('pizza-favorita')
    button.style.backgroundImage = `url(../img${pizza.imagem})`
    button.id = pizza.id

    const a = document.createElement('a')
    a.href = './pizza.html'

    const span = document.createElement('span')
    span.textContent = `R$ ${pizza.preco}`
    span.classList.add('preco')
    span.style.display = 'none'

    const p = document.createElement('p')
    p.textContent = pizza.nome
    p.classList.add('nome-pizza')
    p.classList.add('nome-pizza-recomendada')

    button.appendChild(a)
    a.replaceChildren(span, p)

    const pizzaContainer = document.getElementById('pizzas-recomendadas')
    pizzaContainer.appendChild(button)
    
}

const criarBebidas = (bebida) => {

    const button = document.createElement('button')
    const a = document.createElement('a')
    const produto = document.createElement('div')
    const img = document.createElement('img')
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const ul = document.createElement('ul')
    const span = document.createElement('span')
    
    button.classList.add('bebida')
    a.href = '#'
    produto.classList.add('produto')
    img.src = `../img${bebida.imagem}`
    img.alt = bebida.nome
    div.classList.add('bebida-info')
    h3.classList.add('nome-bebida')
    h3.textContent = bebida.nome
    ul.classList.add('descricao-bebida')
    span.classList.add('preco')
    span.textContent = `R$ ${bebida.preco}`

    bebida.caracteristicas.forEach(descricao => {
        
        const li = document.createElement('li')
        li.textContent = descricao
        ul.appendChild(li)

    })

    button.appendChild(a)
    a.replaceChildren(produto, span)
    produto.replaceChildren(img, div)
    div.replaceChildren(h3, ul)

    const bebidaContainer = document.getElementById('container-bebidas')
    bebidaContainer.appendChild(button)
    
}

const selecionarPizza = async() => {
    
    const botaoPizzas = await document.getElementsByClassName('pizza-favorita')
    for (let pizza of botaoPizzas){
        pizza.addEventListener('click', () => {
            localStorage.setItem('pizzaID', pizza.id)
        })
    }
    
}

window.addEventListener('load', montarUsuario())
window.addEventListener('load', selecionarPizza())

window.addEventListener('load', categoriasJSON.categorias.forEach(categoria => {
    criarCategorias(categoria)
}))
window.addEventListener('load', pizzasFavoritasJSON.pizzas.forEach(pizza => {
    criarPizzasRecomendadas(pizza)
}))
window.addEventListener('load', pizzasRecomendadasJSON.pizzas.forEach(pizza => {
    criarPizzasFavoritas(pizza)
}))
window.addEventListener('load', bebibasCompraJSON.bebidas.forEach(bebida => {
    criarBebidas(bebida)
}))