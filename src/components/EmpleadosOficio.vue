<template>
  <div>
    <div v-for="emp in empleados" :key="emp">
      <h1 style="color:blue">Apellido: {{ emp.apellido }}</h1>
      <h2 style="color:red">Salario: {{ emp.salario }}</h2>
      <h2 style="color:orange">Departamento: {{ emp.departamento }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global";
export default {
  name: "EmpleadosOficio",
  data() {
    return {
      empleados: [],
    };
  },
  mounted() {
    this.loadEmpleados();
  },
  methods: {
    loadEmpleados() {
      var request =
        "api/Empleados/EmpleadosOficio/" + this.$route.params.oficio;
      var url = Global.ulrEmpleados + request;
      axios.get(url).then((res) => {
        this.empleados = res.data;
      });
    },
  },
  watch: {
    "$route.params.oficio"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadEmpleados();
      }
    },
  },
};
</script>

<style>
</style>