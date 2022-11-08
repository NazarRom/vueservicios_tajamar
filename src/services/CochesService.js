import axios from 'axios';
import Global from '../Global';
export default class CochesService {
    //realizamos un metodo para recuperar todos los coches
    getCoches() {
        return new Promise(function (resolve) {
            var request = "webresources/coches";
            var url = Global.urlCoches + request;
            var coches = [];
            axios.get(url).then(res => {
                coches = res.data;
                resolve(coches);
            })
        })
    }
}
