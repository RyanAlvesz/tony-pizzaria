'use strict'

const imagem = sessionStorage.getItem('imagem')
const nome = sessionStorage.getItem('nome')
const emailCadastrado = sessionStorage.getItem('email')
const telefoneCadastrado = sessionStorage.getItem('telephone')
const icon = document.getElementById('imagem-usuario')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const nomeUsuario = document.getElementById('nome')
const input = document.getElementById('foto-perfil')
const botaoSair = document.getElementById('sair')


const montarPerfil = () => {

    icon.style.backgroundImage = `url(${imagem})`
    nomeUsuario.textContent = nome

    if(telefoneCadastrado){
        telefone.textContent = telefoneCadastrado
    }
    
    email.textContent = emailCadastrado

}

input.addEventListener('change', () => {

    let file = input.files[0]
    
    if (file) {

        const reader = new FileReader();
    
        reader.addEventListener('load', (e) => {
            const readerTarget = e.target
            sessionStorage.setItem('imagem', readerTarget.result)
            icon.style.backgroundImage = `url(${sessionStorage.getItem('imagem')})`
        })
    
    reader.readAsDataURL(file);

    }

})

botaoSair.addEventListener('click', () => {
    window.location.href = './login.html'
    sessionStorage.clear()
})

montarPerfil()