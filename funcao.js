function calcular() {
    let peso = document.getElementById('txtpes')
    let altura = document.getElementById('txtalt')
    let res = document.getElementById('res')

    let p = Number(peso.value)
    let alt = Number(altura.value)
    let imc = p / (alt **2)

    if(imc >= 18.5 && imc <= 24.9){
        res.innerHTML = `<p> O seu IMC é de ${imc.toFixed(2)},
         esse valor é considerado NORMAL. Procure um médico para um resultado mais confiavél.</p>`
         res.style.background= 'green'
         res.style.color= 'white'

    }else if(imc < 30.0){
        res.innerHTML = `<p> O seu IMC é de ${imc.toFixed(1)},
         esse valor é considerado como SOBREPESO! Procure um médico para um resultado mais confiavél.</p>`
         res.style.background= 'orangered'
         res.style.color= 'white'

    }else if(imc > 30) {
        res.innerHTML = `<p> O seu IMC é de ${imc.toFixed(1)},
        esse valor é considerado como OBESIDADE! Procure um médico para um resultado mais confiavél.</p>`
        res.style.background= 'red'
        res.style.color= 'white'
      
    } if(imc < 18.5){
        res.innerHTML = `<p> O seu IMC é de ${imc.toFixed(1)},
         esse valor é considerado como MAGREZA! Procure um médico para um resultado mais confiavél.</p>`
         res.style.background= 'orangered'
         res.style.color= 'white'

        }
        
   
}