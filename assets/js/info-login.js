'use strict'

const listarUsuarios = async() => {

    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch(url)
    const data = response.json()
    return data

}

const listarUsuario = async(id) => {

    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const response = await fetch(url)
    const data = response.json()
    return data

}

const cadastrarUsuario = async(usuario) => {

    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)

    return response.ok

}

const deletarUsuario = async(id) => {

    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

const atualizarUsuario = async(usuario) => {

    const url = `http://10.107.140.2:8080/usuarios/${usuario.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    return response.ok
}

export {
    listarUsuarios,
    listarUsuario,
    cadastrarUsuario,
    deletarUsuario,
    atualizarUsuario
}