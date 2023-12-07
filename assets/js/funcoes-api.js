'use strict'

const listarUsuarios = async() => {

    const url = 'https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app/usuarios/'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const listarCategorias = async() => {

    const url = 'https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app/categorias/'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const listarPizzas = async() => {

    const url = 'https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app/pizzas/'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const listarPizzasFavoritas = async() => {

    const url = 'https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app/pizzas/favoritas'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const listarBebidas = async() => {

    const url = 'https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app/bebidas/'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const infoUsuario = async(id) => {

    const url = `https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app/usuario/${id}`
    const response = await fetch(url)
    const data = response.json()
    return data

}

const infoPizza = async(id) => {

    const url = `https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app/pizza/${id}`
    const response = await fetch(url)
    const data = response.json()
    return data

}

const comentarios = async(id) => {

    const url = `https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app/comentarios/${id}`
    const response = await fetch(url)
    const data = response.json()
    return data

}



export {
    listarUsuarios,
    listarCategorias,
    listarPizzas,
    listarPizzasFavoritas,
    listarBebidas,
    infoUsuario,
    infoPizza,
    comentarios
}