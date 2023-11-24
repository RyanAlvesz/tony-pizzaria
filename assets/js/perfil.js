'use strict'

const icon = document.getElementById('imagem-usuario')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const nomeUsuario = document.getElementById('nome')
const cidade = document.getElementById('cidade')
const localizacao = document.getElementById('localizacao')
const input = document.getElementById('foto-perfil')
const botaoSair = document.getElementById('sair')

import { infoUsuario } from './funcoes-api.js'
const usarioID = localStorage.getItem('usuarioID')
const usuario = await infoUsuario(usarioID) 

const montarPerfil = () => {

    icon.style.backgroundImage = `url(..${usuario.foto})`
    nomeUsuario.textContent = usuario.nome
    telefone.textContent = usuario.telefone
    email.textContent = usuario.email
    cidade.textContent = `${usuario.endereco[0].cidade} - ${usuario.endereco[0].uf}`
    localizacao.textContent = `${usuario.endereco[0].logradouro}, ${usuario.endereco[0].cidade} - ${usuario.endereco[0].uf}`

}

input.addEventListener('change', () => {

    let file = input.files[0]
    
    if (file) {

        const reader = new FileReader();
    
        reader.addEventListener('load', (e) => {
            const readerTarget = e.target
            localStorage.setItem('imagem', readerTarget.result)
            icon.style.backgroundImage = `url(${localStorage.getItem('imagem')})`
        })
    
    reader.readAsDataURL(file);

    }

})

botaoSair.addEventListener('click', () => {
    window.location.href = './login.html'
    localStorage.clear()
})

window.addEventListener('load', montarPerfil())
