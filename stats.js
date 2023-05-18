let containerTable = document.getElementById ("container-table")

let info
let eventsPastFilter
let eventsUpcomingFilter

fetch (`https://mindhub-xj03.onrender.com/api/amazing`)
.then (res => res.json())
.then (data => {
    info = data

    /* Codigo tabla Events-Statistics */

    function filtroUpcoming (eventos){          //filtra eventos futuros
        return eventos.date > data.currentDate
    }
    eventsUpcomingFilter = info.events.filter((filtroUpcoming))
    
    function filtroPast (eventos){              //filtra eventos pasados
        return eventos.date < data.currentDate
    }
     eventsPastFilter = info.events.filter((filtroPast))
    
     /* Variables que ejecutan funciones para la tabla eventos estaticos */
    let eventoMayorAsistencia = mayorAsistencia(eventsPastFilter)
    let eventoMenorAsistencia = menorAsistencia(eventsPastFilter)
    let eventoMayorCapacidad =  mayorCapacidad(info.events)

    /* captura el Id (Events-Statistics" stats.html) e inserta el codigo en el html */
    const eventsStatistics=document.getElementById("Events-Statistics")

    /* muestra información sobre los eventos con mayor asistencia, menor asistencia y mayor capacidad*/
    eventsStatistics.innerHTML +=`
        <tr>
          <td>${eventoMayorAsistencia.name}  ${(eventoMayorAsistencia.assistance/eventoMayorAsistencia.capacity*100).toFixed(2)}%</td>
          <td>${eventoMenorAsistencia.name}  ${(eventoMenorAsistencia.assistance/eventoMenorAsistencia.capacity*100).toFixed(2)}%</td>
          <td>${eventoMayorCapacidad.name}  ${eventoMayorCapacidad.capacity} </td>
        </tr>
      `
    
    /* filtra por categoria, elimina los duplicados, devuelve un array*/
      const category = info.events.map (evento => evento.category)
    const setInfo = new Set (category)
    const arrayCategory = Array.from (setInfo)    
    
  

     /*  contiene la categoría, recaudación total y porcentaje promedio de los eventos correspondientes a esa categoría (past y upcoming)*/

    let tablaImprimirPasado = imprimirPasado (arrayCategory)
    let tablaImprimirFuturo = imprimirFuturo(arrayCategory)
    
    
     /* Upcoming events statics by category (tabla)*/ 
    function imprimirFuturo (categorias){   
        let imprimirTabla = []
        for (let categoria of categorias){          
            let arrayFiltradoCategorias = eventosFiltradosCategoria (eventsUpcomingFilter,categoria)
            if (arrayFiltradoCategorias.length == 0){
            } else{
                let recaudacion = recaudarFuturo (arrayFiltradoCategorias)
                let porcentajeTotal = porcentajeFuturo(arrayFiltradoCategorias).toFixed(2)
                imprimirTabla.push({categoria: categoria,recaudacion: recaudacion, porcentaje: porcentajeTotal})
            }
        }   
        return imprimirTabla   
    }

    /* Past Events statistics by category (tabla)*/
    function imprimirPasado (categorias){
        let imprimirTabla = []
        for (let categoria of categorias){            
            let arrayFiltradoCategorias = eventosFiltradosCategoria (eventsPastFilter,categoria)
            if (arrayFiltradoCategorias.length == 0){
            } else {
                let recaudacion = recaudarPasado (arrayFiltradoCategorias)
                let porcentajeTotal = porcentajePasado(arrayFiltradoCategorias).toFixed(2)
                imprimirTabla.push({categoria: categoria,recaudacion: recaudacion, porcentaje: porcentajeTotal})
            }
        }
        return imprimirTabla
    }
     
    /* Captura el ID de las tablas Upcoming y Past (stats.html) */
    const tablaUpcoming= document.getElementById("Upcoming-events")
    const tablaPast=document.getElementById("Past-events")
      
    
    /*  generan el contenido HTML para past y upcoming, utilizando los datos de los eventos filtrados y procesados previamente. */
    let template =""

    for(let evento of tablaImprimirFuturo){
        template +=`
          <tr>
              <td>${evento.categoria}</td>
              <td>$${evento.recaudacion.toLocaleString()}</td>
              <td>${evento.porcentaje} %</td>
          </tr>
        `
    }

    let template2 =""

    for(let evento of tablaImprimirPasado){
        template2 +=`
          <tr>
              <td>${evento.categoria}</td>
              <td>$${evento.recaudacion.toLocaleString()}</td>
              <td>${evento.porcentaje} %</td>
          </tr>
        `
      }
    /* inyecta el template al html */
    tablaUpcoming.innerHTML=template
    tablaPast.innerHTML=template2
} 
)
.catch(err => console.log (err))

/* funciones para la tabla de Events Statistics */
function mayorAsistencia(eventsPastFilter){
    let mayor = eventsPastFilter[0].assistance/eventsPastFilter[0].capacity*100
    let mayorEvento = eventsPastFilter[0]   
    for(let evento of eventsPastFilter){
      let porcentaje= evento.assistance/evento.capacity*100
      if(porcentaje>mayor){
        mayor=porcentaje
        mayorEvento=evento
        }
    }
    return mayorEvento        
} 

function menorAsistencia(eventsPastFilter){
    let menor = eventsPastFilter[0].assistance/eventsPastFilter[0].capacity*100
    let menorEvento = eventsPastFilter[0]      
    for(let evento of eventsPastFilter){
        let porcentaje= evento.assistance/evento.capacity*100
        if(porcentaje<menor){
           menor=porcentaje
           menorEvento=evento
        }
    }
    return menorEvento        
} 
    
function mayorCapacidad(eventos){
    let mayor = eventos[0].capacity
    let mayorCapacidad = eventos[0]          
    for(let evento of eventos){
        let capacidad= evento.capacity
        if(capacidad>mayor){
            mayor=capacidad
            mayorCapacidad=evento
            }
        }
    return mayorCapacidad        
} 
        
    /* Funciones utilizadas en el código anterior para realizar cálculos relacionados 
    con la recaudación y el porcentaje de asistencia de los eventos, tanto para eventos pasados como futuros. */
    
function eventosFiltradosCategoria (eventos,datos){
    return eventos.filter ( item => item.category.includes (datos))
}


function recaudarPasado (eventos) {
    let total =0
    for ( let recaudacion2 of eventos){  
        total += recaudacion2.price * recaudacion2.assistance
    }      
    return total
}

function recaudarFuturo (eventos) {
    let total =0
    for ( let recaudacion of eventos){
        total += recaudacion.price * recaudacion.estimate
    }
    return total
}

function porcentajePasado (eventos) {
    let total =0
    for ( let porcentaje of eventos){      
        total += porcentaje.assistance / porcentaje.capacity * 100
    }
    total = total/eventos.length            
    return total
}

function porcentajeFuturo (eventos) {
    let total =0
    for ( let porcentaje of eventos){   
        total += porcentaje.estimate / porcentaje.capacity * 100
    }
    total = total/eventos.length
    return total
}