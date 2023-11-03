'use strict'

const botaoLogin = document.getElementById('botao')

const verificarLogin = () => {

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let validacaoEmail = localStorage.getItem('email') 
    let validacaoSenha = localStorage.getItem('senha')

    if(!validacaoEmail && !validacaoSenha){
        validacaoEmail = 'celso@senai.com'
        validacaoSenha = 'java'
        localStorage.setItem('email', validacaoEmail)
        localStorage.setItem('senha', validacaoSenha)
    }
    
    if(email && senha){
        if(email == validacaoEmail && senha == validacaoSenha){
            window.location.href = './home.html'
        }
        else
        alert('Email e/ou senha incorreto(s)')
    }
    
}

botaoLogin.addEventListener('click', verificarLogin)