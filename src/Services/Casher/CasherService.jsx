import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/empresas';
const headers = {
  'Content-Type': 'application/json'
};

class CasherService {

  async getCashierList(idEmpresa) {
    return await axios.get(`${urlBase}/listar-produtos-carrinho/${idEmpresa}`, {
      headers: headers
    })
      .then(res => res.data)
      .catch((err) => {
        console.error(`Request Failed ${err}`);
      });
  }

  async sellCashier(idEmpresa) {
    return await axios.put(`${urlBase}/vender-produtos-carrinho/${idEmpresa}`, {
      headers: headers
    })
      .then(res => {
        notify('Carrinho vendido com sucesso!', 'sucess')
        return res.data
      })
      .catch((err) => {
        notify('Erro ao vender os produtos.', 'error')
        console.error(`Request Failed ${err}`);
        return null
      });
  }

}

export default CasherService;