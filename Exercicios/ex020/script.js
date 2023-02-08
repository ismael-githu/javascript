function clicou(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#nac')
    var nascimento=(fano.value)
    var res=document.querySelector('div#res')
    var genero=''
    
    if(nascimento == 0 || nascimento > ano){
        window.alert('verifique os dados e tente novamente')
    }
    else{
        var sex=document.getElementsByName('sex')
        var idade=ano-nascimento
        var img=document.createElement('img')
        
    }
    if(sex[0].checked){
        genero='Homem'
        img.setAttribute('src' ,'foto-homem.jpg')
    }
    else if(sex[1].checked){
        genero='Mulher'
        img.setAttribute('src' ,'foto-mulher.jpg')
    }
    res.style.textAlign = 'center'
    res.innerHTML=`<p> Detectamos ${genero} com ${idade} anos </p>`
    res.appendChild(img)
}
