
//ejercicio 1

let estatura = document.getElementById (`estatura`)

let peso = document.getElementById (`peso`)

 let resultado = document.getElementById (`resultado`)

let formulario = document.getElementById (`formulario`)

formulario.addEventListener ("submit",(e)=>{
    e.preventDefault()
    console.log(e);
    let resultado1 = 0
    resultado.innerHTML+=resultado1
    return resultado.value = peso.value / (estatura.value * 2)
})

//ejercicio 2
let dolar = document.getElementById("dolar")
let monedaLocal = document.getElementById("pesos")
let divisa = document.getElementById("divisa")

divisa.addEventListener("submit",(e)=>{
    e.preventDefault()
    let pesos = 140
    let resultado2 = 0
    monedaLocal.innerHTML += resultado2
    return monedaLocal.value = dolar.value * pesos
})


