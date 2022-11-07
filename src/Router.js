import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CochesComponent from './components/CochesComponent.vue';
import EmpleadosOficio from './components/EmpleadosOficio'
const routes = [
    {
        path:"/",component:HomeComponent
    },
    {
        path:"/coches",component:CochesComponent
    },
    {
        path:"/oficio:id?",component:EmpleadosOficio
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
});
export default router;