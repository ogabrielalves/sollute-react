import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/empresas';
const headers = {
  'Content-Type': 'application/json'
};

class SalesReportService {

    async getValorBruto(idEmpresa) {
      return await axios.get(`${urlBase}/calcular-valor-vendidos/${idEmpresa}`, {
        headers: headers
      })
        .then(res => res.data)
        .catch((err) => {
          console.error(`Request Failed ${err}`);
        });
    }
    async getValorLiquido(idEmpresa) {
      return await axios.get(`${urlBase}/calcular-liquido/${idEmpresa}`, {
        headers: headers
      })
        .then(res => res.data)
        .catch((err) => {
          console.error(`Request Failed ${err}`);
        });
    }

    async getTop5ProdutosVendidos(idEmpresa) {
        return await axios.get(`${urlBase}/listar-produtos-ordem-maior/${idEmpresa}`, {
            headers: headers
        })
            .then(res => res.data)
            .catch((err) => {
                console.error(`Request Failed ${err}`);
            });
    }

  }
  
  
  export default SalesReportService;