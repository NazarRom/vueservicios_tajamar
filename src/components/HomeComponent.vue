<template>
  <div>
    <h1>Home</h1>
    <h1>{{saludo}}</h1>
  </div>
</template>

<script>
import ServiceEjemplo from '../services/ServiceEjemplo';
//para poder utilizar nuestro servicio debemos
//instanciar un objeto de la clase en el component
const service =  new ServiceEjemplo();
export default {
name:"HomeComponent",
data(){
  return{
    saludo:""
  }
},
mounted(){
  this.saludo = service.getSaludo("Perrote")
}
}
</script>

<style>

</style>