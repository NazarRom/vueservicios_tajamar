<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Rutas</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="ofi in oficios" :key="ofi">
          <router-link :to="'/oficio/' + ofi" aria-current="page" class="nav-link">{{ofi}}</router-link>
        </li>
        <li>
           <router-link aria-current="page" class="nav-link" to="/coches">Coches</router-link>
        </li>
         <li>
           <router-link aria-current="page" class="nav-link" to="/detalles">Detalles Empleado</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import Global from '../Global';
import axios from 'axios';
export default {
name:"MenuComponent",
data(){
    return{
        oficios:[]
    }
},
mounted(){
    var request = "api/Empleados/oficios";
    var url = Global.ulrEmpleados + request;
    axios.get(url).then(res=>{
        this.oficios=res.data
    })
}
}
</script>

<style>

</style>