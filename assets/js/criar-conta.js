'use strict'

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
            
            sessionStorage.setItem('nome', nome.value)
            sessionStorage.setItem('email', email.value)
            sessionStorage.setItem('senha', password.value)
            sessionStorage.setItem('telephone', telephone.value)
            
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
            sessionStorage.setItem('imagem', readerTarget.result)
            imagem.style.backgroundImage = `url(${sessionStorage.getItem('imagem')})`
            imagem.removeChild(imagem.children[0])
        })
    
    reader.readAsDataURL(file);

    }

})