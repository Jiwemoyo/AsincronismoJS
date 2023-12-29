const mostrarConsola =(numero)=>{
    console.log(numero)
}

const suma = (num1,num2,callback)=>{
    let suma = num1 + num2
    callback(suma)
}


suma(4,5,mostrarConsola)