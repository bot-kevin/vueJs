const app = new Vue({
    el:'#app',
    data:{
        title:'We are in API',
        usuarios: [],
        cedula : "",
        contrasena: ""
    },
    methods:{
        leerAPI () {
            axios.get('http://localhost/proyecto_2020arriendo/getusers.php').then(response => {
                // mostrar el contenido 
                console.log(response);
            }).catch(e =>{
                console.log(e);
            });
        },
        login () {
            axios.post('http://localhost/proyecto_2020arriendo/login.php',{
                cedula:this.cedula,
                contrasena:this.contrasena
            }) .then(response => {
                const a= response.data; 
                console.log(a);
            }) . catch (e => {
                console.log(e);
            })
        }
    }
});