const $caja = document.getElementById("content-cards");
const $checkbox = document.getElementById ("contenedor-checkbox")
const $inputSearch = document.getElementById ("search")
let info 


fetch (`https://mindhub-xj03.onrender.com/api/amazing`)
.then (res => res.json())
.then (data =>{

    info = data

    $caja.innerHTML = generarTarjeta (info.events)
    
    /*Filtra por categoria */
    const category = info.events.map (evento => evento.category) //me devuelve la categoria
    const setInfo = new Set (category)  //no me da valores duplicados y me devuelve el primero
    const arrayCategory = Array.from (setInfo) //lo vuelve a hacer array

    const templateCategory = arrayCategory.reduce(funcionReduce, '')
    $checkbox.innerHTML = templateCategory;
})
.catch(err => console.log (err))




//creacion template de checkbox por categoria
const funcionReduce = (acumulador,elementoActual, indice, array) =>{
    return acumulador += `<div class="form-check">
                            <input class="form-check-input" type="checkbox" id="${elementoActual} - ${indice}" value="${elementoActual}">
                            <label class="form-check-label" for="${elementoActual} - ${indice}"> ${elementoActual}</label>
                        </div>`
} // funcion que crea un frgmentos de html por check y se insertan

/*const templateCategory = arrayCategory.reduce(funcionReduce, '')
$checkbox.innerHTML = templateCategory;             estas lineas de codigo se usaban con el archivo data.js*/

/*Creacion de tarjeta */
function generarTarjeta(listaFinal) {
    return listaFinal.reduce( ( acc, act ) =>{
      return acc +=  `
        <div class="card" style="width: 15rem;">
            <img style="height: 9rem;" src="${act.image}" class="card-img-top" alt="img of ${act.name}">
                <div class="d-flex flex-column justify-content-between card-body" style="height: 13rem">
                    <h5 class="card-title">${act.name}</h5>
                    <p class="card-text" >${act.description}</p>
                    <div class="d-flex justify-content-around align-items-center">
                        <p class="m-0">Price: $${act.price}</p>
                        <a href="./details.html?_id=${act._id}" class="btn btn-primary">More Info</a>
                    </div>
                </div>
        </div>
    `}, '' )
}

/*$caja.innerHTML = generarTarjeta (info)           estas lineas de codigo se usaban con el archivo data.js*/

/*escuchador esperando el evento change del checkbox */
$checkbox.addEventListener( 'change', () => { filtroSearch ()
})


/*filtra si category tiene eventos guardados */
function filtrarEventos( datos, category ) {
    if( category.length == 0 ) return datos
    return datos.filter( datos => category.includes( datos.category ) )
}


//SEARCH

/*escuchador esperando el evento input del buscador */
$inputSearch.addEventListener ('input', () => { filtroSearch ()
})

/* filtra lo que viene del input */
function busquedaNombre (datos, category){
    return datos.filter( item => item.name.toLowerCase().includes(category.toLowerCase()))
}

function filtroSearch (){
    const checkboxChange = Array.from (document.querySelectorAll (`input[type="checkbox"]:checked`)).map ( check => check.value)
    let filtrarPorBusqueda = busquedaNombre (info.events, $inputSearch.value )
    let filtrarCheck = filtrarEventos (filtrarPorBusqueda, checkboxChange)
    $caja.innerHTML = generarTarjeta (filtrarCheck)
}