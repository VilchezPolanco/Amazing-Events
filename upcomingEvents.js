const $caja2 = document.getElementById('content-upcoming-cards');
const $checkbox = document.getElementById ("contenedor-checkbox")
const $inputSearch = document.getElementById ("search")
let info 
let upComingEvents

fetch (`https://mindhub-xj03.onrender.com/api/amazing`)
.then (res => res.json())  //la respuesta la paso a json devuelve promesa
.then (data => {    //en el metodo then() ejecuto la funcion callback 

    info = data

    // Compara fechas y usa la funcion llenarTarjetas para imprimirlas.
    function filtroFecha (lista){
        return lista.date > data.currentDate
     }
     upComingEvents = info.events.filter((filtroFecha))

     $caja2.innerHTML = generarTarjeta (upComingEvents)

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
}
/* const templateCategory = arrayCategory.reduce(funcionReduce, '')
$checkbox.innerHTML = templateCategory;     se ejecuta en esta linea cuando tiene en archivo data y no usa apis
 */

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

/* $caja2.innerHTML = generarTarjeta (upComingEvents)    se ejecuta en esta linea cuando tiene en archivo data y no usa apis*/

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
    let filtrarPorBusqueda = busquedaNombre (upComingEvents, $inputSearch.value )
    let filtrarCheck = filtrarEventos (filtrarPorBusqueda, checkboxChange)
    $caja2.innerHTML = generarTarjeta (filtrarCheck)
}