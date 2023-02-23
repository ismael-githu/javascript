function clicar(){
    var inicio=document.getElementById('txt1')
    var fim=document.getElementById('txt2')
    var passo=document.getElementById('txt3')
    var res=document.getElementById('res')
    if(inicio.value == 0 || fim.value == 0 || passo.value.length == 0){
        window.alert('[ERRO]Faltam informações')
        res.innerHTML='Falta informações'
    }
    else{
        res.innerHTML='Contando... <br>'
        i=Number(inicio.value)
        f=Number(fim.value)
        p=Number(passo.value)
        if(p <=0){
            window.alert('Passo invalido, considerando PASSO 1')
            p=1
        }
        if(i<f){
            for(var c=i; c<=f; c+=p){
                res.innerHTML+=`${c} \u{1F449}`
            }
            
        }else{
            for(var c=i;c>=f;c-=p){
                res.innerHTML+=`${c} \u{1F449}`
            }
        }
        
        res.innerHTML+=`\u{1F3c1}`
    }
}