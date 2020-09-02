var app = new Vue({
    el:'#app',
    data:{
        titulo:'GYM',
        tareas:[],
        nuevaTarea:''
    },
    methods:{
        agregarTarea () {            
            this.tareas.push({nombre:this.nuevaTarea,estado:false})
            this.nuevaTarea = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        eliminartarea(index){            
            this.tareas.splice(index,1)
        },
        modificar (index) {
            this.tareas[index].estado = true;
        }
    },
    /**
     * Este motodo se ejecuta cuando la página inicia
     */
    created: function (){
        // devuelve null si no existe y los datos si existe
        let datosdb =JSON.parse(localStorage.getItem('gym-vue'));
        if (datosdb === null){
            this.tareas = []
        } else {
            this.tareas = datosdb
        }

    }
})