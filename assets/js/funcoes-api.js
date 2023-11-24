'use strict'

const listarUsuarios = async() => {

    const url = 'http://localhost:8080/usuarios/'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const listarCategorias = async() => {

    const url = 'http://localhost:8080/categorias/'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const listarPizzas = async() => {

    const url = 'http://localhost:8080/pizzas/'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const listarPizzasFavoritas = async() => {

    const url = 'http://localhost:8080/pizzas/favoritas'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const listarBebidas = async() => {

    const url = 'http://localhost:8080/bebidas/'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const infoUsuario = async(id) => {

    const url = `http://localhost:8080/usuario/${id}`
    const response = await fetch(url)
    const data = response.json()
    return data

}

const infoPizza = async(id) => {

    const url = `http://localhost:8080/pizza/${id}`
    const response = await fetch(url)
    const data = response.json()
    return data

}

const comentarios = async(id) => {

    const url = `http://localhost:8080/comentarios/${id}`
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