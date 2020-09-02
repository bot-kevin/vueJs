const app = new Vue({
    el : '#app',
    data : {
        mensaje : "Propiedades computadas",
        contador : 0
    },
    computed:{
        invertido() {
            /**
             * split -> separa la cadena donde encuentre el caracter del parametro 
             *           en este caso separa todos, pero si es un Space separa en dos
             * split -> retorna un arreglo de caracteres
             * reverse -> invierte un arreglo
             * join -> une un cojunto de caracteres o vuelve a ser cadena
             */
            return this.mensaje.split('').reverse().join('')
        },
        color () {
            return {
                'bg-danger': this.contador < 10 ,
                'bg-warning': this.contador >= 10 && this.contador < 30,
                'bg-success': this.contador>= 30
            }
        }
    }
});