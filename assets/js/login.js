'use strict'

const botaoLogin = document.getElementById('botao')

const verificarLogin = () => {

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let validacaoEmail = sessionStorage.getItem('email') 
    let validacaoSenha = sessionStorage.getItem('senha')

    if(!validacaoEmail && !validacaoSenha){
        validacaoEmail = 'celso@senai.com'
        validacaoSenha = 'java'
        sessionStorage.setItem('email', validacaoEmail)
        sessionStorage.setItem('senha', validacaoSenha)
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