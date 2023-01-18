function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('{ERRO} Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero='Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'hBaby.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'hJove.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'hAdult.png')
            }else{
                //idoso
                img.setAttribute('src', 'hIdoso.png')
            }

        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'mBaby.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mJove.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'mAdult.png')
            }else{
                //idoso
                img.setAttribute('src', 'mIdosa.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML =`Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img)
    }
}