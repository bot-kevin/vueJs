// INSTANCIAR LO QUE ES VUE
const myvue = new Vue({
    // DETECTAR EL ID DEL CONTENEDOR APP
    el:'#app',
    data:{
        titulo:'Hola mundo con vue',
        frutas: ['Manzana', 'Pera', 'Aguacate'],
        persona:[
            {nombre:'kevin', cantiadad: 20},
            {nombre:'Daniela', cantiadad: 0},
            {nombre:'Andrea', cantiadad: 20},
        ]
    }
})

var myapp2 = new Vue({
    el:'#app2',
    data: {
        mensaje:'Este es el mensaje' + new  Date().toLocaleString()
    }
})

var myapp3 = new Vue({
    el:'#app3',
    data:{
        ver : true
    }
})