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


const llamandoPromesa = async()=>{
    let promesa1 = await prometiendo
    console.log(promesa1.description)

    let promesa2 = await prometiendo1
    console.log(promesa2.description)

    let promesa3 = await prometiendo2
    console.log(promesa3.description)
}


llamandoPromesa()