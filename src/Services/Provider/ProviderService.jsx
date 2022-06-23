import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/fornecedores';
const headers = {
  'Content-Type': 'application/json'
};

class ProviderService {

    async getFornecedores(idEmpresa) {
      return await axios.get(`${urlBase}/listar-fornecedores/${idEmpresa}`, {
        headers: headers
      })
        .then(res => res.data)
        .catch((err) => {
          console.error(`Request Failed ${err}`);
        });
    }
  
    async postFornecedores(obj, idEmpresa) {
      return await axios.post(`${urlBase}/criar-fornecedor/${idEmpresa}`,
        obj
      )
        .then(res => {
          notify('Fornecedor cadastrado com sucesso!', 'sucess')
          return res.data
        })
        .catch((err) => {
          notify('Erro ao cadastrar fornecedor.', 'error')
          console.error(`Request Failed ${err}`);
          return null
        });
    }

    async putProvider(obj, idEmpresa, idFornecedor) {
      return await axios.put(`${urlBase}/editar-fornecedor/${idEmpresa}/${idFornecedor}`,
        obj
      )
        .then(res => {
          notify('Fornecedor editado com sucesso!', 'sucess')
          return res.data
        })
        .catch((err) => {
          notify('Erro ao editar o Fornecedor.', 'error')
          console.error(`Request Failed ${err}`);
          return null
        });
    }
  
    deleteFornecedores({ codigo }) {
      axios.delete(`${urlBase}/deletar-fornecedor/${codigo}`)
    }
  }
  
  
  export default ProviderService;