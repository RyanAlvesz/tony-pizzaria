'use strict'

import { cadastrarUsuario } from './info-login.js'

let fotoPerfil

const botao = document.getElementById('criar-conta')
const input = document.getElementById('foto-perfil')

botao.addEventListener('click', () => {
    
    const nome = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const passwordConfirmation = document.getElementById('password-confirmation')
    const telephone = document.getElementById('telephone')
    
    if(nome.value != '' && email.value != '' && password.value != '' && passwordConfirmation.value != '' && telephone.value != ''){
        
        if(password.value == passwordConfirmation.value){
            
            if(!fotoPerfil){
                fotoPerfil = false
            }

            const novoUsuario = {
                nome: `${nome.value}`,
                email: `${email.value}`,
                senha: `${password.value}`,
                telefone: `${telephone.value}`,
                fotoPerfil: `${fotoPerfil}`
            }

            cadastrarUsuario(novoUsuario)

            nome.value = ''
            email.value = ''
            telephone.value = ''
            password.value = ''
            passwordConfirmation.value = ''
            
            alert('Conta criada com sucesso')
            
        } else if (password != passwordConfirmation){
            alert('Informe senhas iguais')
        }
        
    }
  
})

input.addEventListener('change', () => {

    let file = input.files[0]
    
    if (file) {

        const reader = new FileReader();
    
        reader.addEventListener('load', (e) => {
            const readerTarget = e.target
            const imagem = document.getElementById('imagem-usuario')
            fotoPerfil = readerTarget.result
            imagem.style.backgroundImage = `url(${fotoPerfil})`
            imagem.removeChild(imagem.children[0])
        })
    
    reader.readAsDataURL(file);

    }

})