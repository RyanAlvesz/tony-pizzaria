'use strict'

import { listarUsuarios } from './funcoes-api.js'

const botaoLogin = document.getElementById('botao')
const login = localStorage.getItem('login')

const verificarLogin = async() => {
    
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let validacaoEmail, validacaoSenha

    const usuarios = await listarUsuarios()

    usuarios.usuarios.forEach(usuario => {
        if(email == usuario.email && senha == usuario.senha){
            validacaoEmail = usuario.email
            validacaoSenha = usuario.senha
            localStorage.setItem('usuarioID', usuario.id)   
        }
    })

    if(email == validacaoEmail && senha == validacaoSenha){
        localStorage.setItem('login', 'true')
        window.location.href = './home.html'
    }

    else
    alert('Email e/ou senha incorreto(s)')

}

botaoLogin.addEventListener('click', verificarLogin)

window.addEventListener('load', () => {

    if(login == 'true'){

        window.location.href = './home.html'

    }

})