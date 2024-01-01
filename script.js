let prometiendo = new Promise((resolve) => {
    setTimeout(() => {
        let objeto = {
            status:200,
            description:'Interfaz Cargada con exito'
    
        }
        resolve(objeto)
    }, 4000);
})

let prometiendo1 = new Promise((resolve) => {
    setTimeout(() => {
        let objeto = {
            status:200,
            description:'Login cargado con exito'
    
        }
        resolve(objeto)
    }, 3000);
})

let prometiendo2 = new Promise((resolve) => {
    setTimeout(() => {
        let objeto = {
            status:200,
            description:'Api Cargada con exito'
    
        }
        resolve(objeto)
    }, 6000);
})


prometiendo.then(pa =>{
    console.log(pa.description)
    prometiendo1.then(pe=>{
        console.log(pe.description)
        prometiendo2.then(pi =>{
            console.log(pi.description)
        }).catch(per =>{
            console.error(per)
        })
    }).catch(per=>{
        console.error(per)
    })
}).catch(par=>{
    console.error(par)
})