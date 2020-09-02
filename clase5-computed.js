const app = new Vue({
    el:'#app',
    data:{
        mensaje: 'I love you'
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        }
    }
})