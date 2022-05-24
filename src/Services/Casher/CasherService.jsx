import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/empresas';
const headers = {
  'Content-Type': 'application/json'
};

class CasherService {

    async getFuncionarios(idEmpresa) {
      return await axios.get(`${urlBase}/listar-produtos/${idEmpresa}`, {
        headers: headers
      })
        .then(res => res.data)
        .catch((err) => {
          console.error(`Request Failed ${err}`);
        });
    }
  
  }
  
  
  export default CasherService;