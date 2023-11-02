'use strict'

const botaoLogin = document.getElementById('botao')

const verificarLogin = () => {

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if(email && senha){
        if(email == "celso@senai.com" && senha == "java"){
            window.location.href = "./home.html"
        }
        else
        alert('Email e/ou senha incorreto(s)')
    }
    
}

botaoLogin.addEventListener('click', verificarLogin)