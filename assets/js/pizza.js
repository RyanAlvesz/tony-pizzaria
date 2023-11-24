'use strict'

import { infoPizza, comentarios } from './funcoes-api.js'
const pizzaID = localStorage.getItem('pizzaID')
const comentariosArray = await comentarios(pizzaID)
const pizza = await infoPizza(pizzaID)
const like = document.getElementById('like')

const criarImagem = () => {
    
    const header = document.getElementById('header')
    header.style.backgroundImage = `url(../img${pizza.imagem})`

    document.getElementsByTagName('title')[0].innerText = pizza.nome

    const nome = document.getElementById('pizza-name')
    const preco = document.getElementById('preco')
    const descricao = document.getElementById('descricao')

    nome.textContent = pizza.nome
    preco.textContent = pizza.preco
    descricao.textContent = pizza.descricao

}

const darLike = () => {

    const img = like.children[0]

    if (img.src.includes('Off'))
        img.src = '../img/icons/LikeOn.svg'
    else if (img.src.includes('On'))
        img.src = '../img/icons/LikeOff.svg'

}

const gerarComentarios = (comentario) => {

    const containerComentario = document.createElement('div')
    const containerSuperior = document.createElement('div')
    const avaliacao = document.createElement('h3')
    const textoComentario = document.createElement('p')

    const pessoa = document.createElement('div')
    const estrelas = document.createElement('div')

    const img = document.createElement('img')
    const infoPessoa = document.createElement('div')

    const nomePessoa = document.createElement('h3')
    const data = document.createElement('span')

    let qntEstrelas = comentario.estrelas

    while(qntEstrelas){
        const estrela = document.createElement('img')
        estrela.src = '../img/icons/Star.svg'
        estrela.alt = 'Estrela'
        estrelas.appendChild(estrela)
        qntEstrelas--
    }
    
    containerComentario.classList.add('container-comentario')
    containerSuperior.classList.add('container-superior')
    avaliacao.classList.add('avaliacao')
    avaliacao.textContent = comentario.titulo
    textoComentario.classList.add('comentario')
    textoComentario.textContent = comentario.comentario
    pessoa.classList.add('pessoa')
    estrelas.classList.add('estrelas')
    img.src = `../${comentario.fotoUsuario}`
    img.alt = `../${comentario.nomeUsuario}`
    infoPessoa.classList.add('info-pessoa')
    nomePessoa.classList.add('nome-pessoa')
    nomePessoa.textContent = comentario.nomeUsuario
    data.classList.add('data')
    data.textContent = comentario.data

    containerComentario.replaceChildren(containerSuperior, avaliacao, textoComentario)
    containerSuperior.replaceChildren(pessoa, estrelas)
    pessoa.replaceChildren(img, infoPessoa)
    infoPessoa.replaceChildren(nomePessoa, data)


    const containerComentarios = document.getElementById('container-comentarios')
    containerComentarios.appendChild(containerComentario)

}

like.addEventListener('click', darLike)
window.addEventListener('load', criarImagem())
window.addEventListener('load', comentariosArray.comentarios.forEach(comentario => {
    gerarComentarios(comentario)
}))