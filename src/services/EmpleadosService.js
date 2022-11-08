import Global from "../Global";
import axios from "axios";
export default class EmpleadosService{
    getEmpleados() {
        return new Promise(function(resolve){
            var request = "/api/Empleados";
            var url = Global.ulrEmpleados + request;
            var empleados = []
            axios.get(url).then(res=>{
                empleados = res.data;
                resolve(empleados);
            })
        })
    }
    findEmpleado(idempleado){
        return new Promise(function(resolve){
            var request = "/api/empleados/" + idempleado;
            var url = Global.ulrEmpleados + request;
            var empleado = {};
            axios.get(url).then(res=>{
                empleado = res.data;
                resolve(empleado);
            })
        });
    }
}