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
import Global from "../Global";
import axios from "axios";
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
        var request = "api/Empleados/" + this.idEmpleado;
        var url = Global.ulrEmpleados + request;
        axios.get(url).then(res=>{
            this.empleado = res.data
        })
    },
  },
  mounted() {
    var request = "api/empleados";
    var url = Global.ulrEmpleados + request;
    axios.get(url).then((res) => {
      this.empleados = res.data;
    });
  },
};
</script>

<style>
</style>