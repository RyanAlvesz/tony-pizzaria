'use strict'

const botaoLogin = document.getElementById('botao')

const verificarLogin = () => {

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if(email && senha){
        if(email == "teste@email.com" && senha == "123"){
            window.location.href = "./home.html"
        }
        else
        alert('Email e/ou senha incorreto(s)')
    }

    return false
    
}

botaoLogin.addEventListener('click', verificarLogin)