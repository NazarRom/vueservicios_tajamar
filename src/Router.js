import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CochesComponent from './components/CochesComponent.vue';
import EmpleadosOficio from './components/EmpleadosOficio';
import EmpledadoDetalle from './components/EmpleadoDetalle.vue';
const routes = [
    {
        path:"/",component:HomeComponent
    },
    {
        path:"/coches",component:CochesComponent
    },
    {
        path:"/oficio/:oficio?",component:EmpleadosOficio
    },
    {
        path:"/detalles",component:EmpledadoDetalle
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
});
export default router;