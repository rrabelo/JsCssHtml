function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        saudacao.innerHTML ='Bom dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        saudacao.innerHTML = 'Boa Tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        saudacao.innerHTML = 'Boa noite!'
        img.src =' fotonoite.png'
        document.body.style.background = '#515154'

    }

}

