var app = new Vue({
    el:'#app',
    data:{
        frutas: [
            {nombre : 'Piña', cantidad: 40},
            {nombre : 'Manzana', cantidad: 30}
        ],
        nuevafruta : '',
        nuevacantidad: '',
        total : 0
    },
    methods:{
        agregarfurta () {
            this.frutas.push(
                {nombre:this.nuevafruta,cantidad:this.nuevacantidad}
            );
            this.nuevafruta = '';
            this.nuevacantidad = '';
        }
    },
    computed:{
        sumarfrutas (){
            this.total = 0;
            for ( fruta of this.frutas ){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
})