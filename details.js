const $detail = document.getElementById( 'contenedor-details' )
let info 

fetch (`https://mindhub-xj03.onrender.com/api/amazing`)
.then (res => res.json())
.then (data =>{

    info = data 

    /* te deja usar los metodos de location */
    const params = new URLSearchParams( location.search )
    
    /* uno de los metodos get para capturar el id*/
    const idParam = params.get('_id')
    
    const comparaId = info.events.find( detail => detail._id == idParam )
    printDetail(comparaId, $detail)
})
.catch(err => console.log (err))


function printDetail(id ,$detail){
$detail.innerHTML = `
<div class="card mb-3" style="max-width: 540px; margin-top: 1rem;">
<div class="row g-0">
    <div class="col-md-4" style="width: 50rem;">
        <img src="${id.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${id.name}</h5>
            <p class="card-text">${id.description}</p>
            <p class="card-text">Date: ${id.date}</p>
            <p class="card-text">Category: ${id.category}</p>
            <p class="card-text">Place: ${id.place}</p>
            <p class="card-text">capacity: ${id.capacity}</p><p class="card-text">${id.assistance ? "Assistance" : "Estimate"}: ${id.assistance ? id.assistance :id.estimate}</p>
            <p class="card-text">price: $${id.price}</p>
        </div>
    </div>
</div>
</div>
`}