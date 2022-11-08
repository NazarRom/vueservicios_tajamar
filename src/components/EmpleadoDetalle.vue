<template>
  <div>
    <h1>Empleado Detalle</h1>
    <form method="post" v-on:submit.prevent="buscarEmpleado">
      <label>Seleccione un Empleado</label>
      <select class="form-control" v-model="idEmpleado">
        <option
          v-for="emp in empleados"
          :key="emp.idEmpleado"
          :value="emp.idEmpleado"
        >
          {{ emp.apellido }}
        </option>
      </select>
      <button class="btn btn-success">Detalles Empleado</button>
    </form>
    <hr/>
    <div v-if="empleado">
        <h2 style="color:blue">Apellido: {{empleado.apellido}}</h2>
        <dl>
            <dt>Oficio: </dt>
            <dd>{{empleado.oficio}}</dd>
            <dt>Salario: </dt>
            <dd>{{empleado.salario}}</dd>
            <dt>Departamento: </dt>
            <dd>{{empleado.departamento}}</dd>
        </dl>

    </div>
  </div>
</template>

<script>
import EmpleadosService from '../services/EmpleadosService';
const service = new EmpleadosService();
export default {
  name: "EmpleadoDetalle",
  data() {
    return {
      empleados: [],
      idEmpleado:0,
      empleado:null
    };
  },
  methods: {
    buscarEmpleado() {
       service.findEmpleado(this.idEmpleado).then(res=>{
        this.empleado = res
       })
    }
  },
  mounted() {
    service.getEmpleados().then(result =>{
      this.empleados = result;
    })
  }
};
</script>

<style>
</style>