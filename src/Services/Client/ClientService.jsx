import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/cliente';
const headers = {
  'Content-Type': 'application/json'
};


class ClientService {

  async getCliente(idEmpresa) {
    return await axios.get(`${urlBase}/listar-cliente/${idEmpresa}`, {
      headers: headers
    })
      .then(res => res.data)
      .catch((err) => {
        console.error(`Request Failed ${err}`);
      });
  }

  async postCliente(obj, idEmpresa) {
    return await axios.post(`${urlBase}/criar-cliente/${idEmpresa}`,
      obj
    )
      .then(res => {
        notify('Produto criado com sucesso!', 'sucess')
        return res.data
      })
      .catch((err) => {
        notify('Erro ao criar produto.', 'error')
        console.error(`Request Failed ${err}`);
        return null
      });
  }

  deleteCliente({ codigo }) {
    axios.delete(`${urlBase}/deletar-cliente/${codigo}`)
  }
}


export default ClientService;