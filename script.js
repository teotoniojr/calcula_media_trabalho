function Calcular () {
    var primeiraNota = parseFloat(document.getElementById("primeiraNota").value) 
    var segundaNota = parseFloat(document.getElementById("segundaNota").value) 
    var terceiraNota = parseFloat(document.getElementById("terceiraNota").value) 
    var quartaNota = parseFloat(document.getElementById("quartaNota").value) 
    var quintaNota = parseFloat(document.getElementById("quintaNota").value) 
    var sextaNota = parseFloat(document.getElementById("sextaNota").value) 
   
    var media = (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota + sextaNota)
    

    var elementoMediaFinal = document.getElementById("mediaFinal")
    var mediaFinal = "A nota do seu trabalho é : " + media
    elementoMediaFinal.innerHTML = mediaFinal

    var elementoResultado = document.getElementById("resultado")

    if (media >= 5) {
        elementoResultado.innerHTML = " Parabéns! Você está entre os tops"
    } else if (media < 5 || media >= 2) {
        elementoResultado.innerHTML = " Muito bem, mas dá pra melhorar"
      }  else {
            elementoResultado.innerHTML = "Nos vemos na recuperação"
        }
    }