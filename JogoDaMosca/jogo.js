var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var tempodamosca = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal'){

  tempodamosca = 1500
}else if( nivel === 'dificil'){

  tempodamosca = 1000
}else if(nivel === 'chucknorris'){

  tempodamosca = 750
}

function ajustaTamanhoPalco(){

  altura = window.innerHeight
  largura = window.innerWidth

  console.log(altura,largura)
}

ajustaTamanhoPalco()

  



function CriarEPosicao(){ 


  var cronometro =  setInterval(function(){
    tempo -= 1
    
   if(tempo < 0 ){

    clearInterval(cronometro)
    clearInterval(criaMosca)
    window.location.href = 'vitoria.html'
   }else{ 

    document.getElementById('cronometro').innerHTML = tempo
   }

   
  }, 1000)








  if(document.getElementById('mosca')){

    document.getElementById('mosca').remove()

    if(vidas > 3){

      window.location.href = 'fim_do_jogo.html'
    }
    
  document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
  vidas++

}
  



  var PosicaoX = Math.floor(Math.random() * altura) - 90
  var PosicaoY = Math.floor(Math.random() * largura) - 90

  PosicaoX = PosicaoX < 0 ? 0 : PosicaoX
  PosicaoY = PosicaoY < 0 ? 0 : PosicaoY

  console.log(PosicaoX, PosicaoY)


 var mosca = document.createElement('img')
 mosca.src = 'imagens/mosca.png'
 mosca.className = TamanhoRandomicos() + ' ' + Lados()
 mosca.style.top = PosicaoX  + 'px'
 mosca.style.left = PosicaoY + 'px'
 mosca.style.position = 'absolute'
 mosca.id = 'mosca'

 mosca.onclick = function(){

  this.remove()
 }

document.body.appendChild(mosca)

}

function TamanhoRandomicos(){

  var classe = Math.floor(Math.random() * 3)

  switch(classe){

    case 0:
    return 'mosca1'
    case 1:
    return 'mosca2'
    case 2:
    return 'mosca3'
    
  }



}
function Lados(){

  var classe = Math.floor(Math.random() * 2)

  switch(classe){

    case 0:
    return 'LadoA'
    case 1:
    return 'LadoB'
    
    
  }



}


