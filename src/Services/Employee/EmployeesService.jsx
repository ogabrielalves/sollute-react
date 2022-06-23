import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/funcionarios';
const headers = {
  'Content-Type': 'application/json'
};

class EmployeesService {

    async getFuncionarios(idEmpresa) {
      return await axios.get(`${urlBase}/listar-funcionarios/${idEmpresa}`, {
        headers: headers
      })
        .then(res => res.data)
        .catch((err) => {
          console.error(`Request Failed ${err}`);
        });
    }
  
    async postFuncionarios(obj, idEmpresa) {
      return await axios.post(`${urlBase}/criar-funcionario/${idEmpresa}`,
        obj
      )
        .then(res => {
          notify('Funcionario cadastrado com sucesso!', 'sucess')
          return res.data
        })
        .catch((err) => {
          notify('Erro ao cadastrar funcionario.', 'error')
          console.error(`Request Failed ${err}`);
          return null
        });
    }

    async putEmployee(obj, idEmpresa, idFuncionario) {
      return await axios.put(`${urlBase}/editar-funcionario/${idEmpresa}/${idFuncionario}`,
        obj
      )
        .then(res => {
          notify('Funcionario editado com sucesso!', 'sucess')
          return res.data
        })
        .catch((err) => {
          notify('Erro ao editar o Funcionario.', 'error')
          console.error(`Request Failed ${err}`);
          return null
        });
    }
  
    deleteFuncionarios({ codigo }) {
      axios.delete(`${urlBase}/deletar-funcionario/${codigo}`)
    }
  }
  
  
  export default EmployeesService;