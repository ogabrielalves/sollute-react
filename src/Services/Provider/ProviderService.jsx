import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/Fornecedor';
const headers = {
  'Content-Type': 'application/json'
};

class ProviderService {

    async getFornecedores(idEmpresa) {
      return await axios.get(`${urlBase}/listar-fornecedor/${idEmpresa}`, {
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
  
    deleteFornecedores({ codigo }) {
      axios.delete(`${urlBase}/deletar-fornecedor/${codigo}`)
    }
  }
  
  
  export default ProviderService;