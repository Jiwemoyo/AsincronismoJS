try {
    console.log('Todo se ejecuto con normalidad')
    setTimeout(() => {
        console.log('Compra realizada con exito')
        throw('No puede realizar la compra espere un momento')
    }, 1000);
} catch (error) {
    console.log('Algo paso',error)
}finally{
    console.log('Yo siempre me ejecuto')
}