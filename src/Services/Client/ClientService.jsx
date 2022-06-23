import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/clientes';
const headers = {
  'Content-Type': 'application/json'
};


class ClientService {

  async getCliente(idEmpresa) {
    return await axios.get(`${urlBase}/listar-clientes/${idEmpresa}`, {
      headers: headers
    })
      .then(res => res.data)
      .catch((err) => {
        console.error(`Request Failed ${err}`);
      });
  }

  async postClient(obj, idEmpresa) {
    return await axios.post(`${urlBase}/adicionar-cliente/${idEmpresa}`,
      obj
    )
      .then(res => {
        notify('Cliente cadastrado com sucesso!', 'sucess')
        return res.data
      })
      .catch((err) => {
        notify('Erro ao cadastrar o cliente.', 'error')
        console.error(`Request Failed ${err}`);
        return null
      });
  }

  async putCliente(obj, idEmpresa, idCliente) {
    return await axios.put(`${urlBase}/editar-cliente/${idEmpresa}/${idCliente}`,
      obj
    )
      .then(res => {
        notify('Cliente editado com sucesso!', 'sucess')
        return res.data
      })
      .catch((err) => {
        notify('Erro ao editar o cliente.', 'error')
        console.error(`Request Failed ${err}`);
        return null
      });
  }

  deleteCliente({ codigo }) {
    axios.delete(`${urlBase}/deletar-cliente/${codigo}`)
  }
}


export default ClientService;