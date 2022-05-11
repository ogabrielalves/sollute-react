import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/empresas';
const headers = {
  'Content-Type': 'application/json'
};
class RegisterService {
  constructor() {
    this.state = {
      data: []
    };
  }

  async postEmpresa(obj) {
    return await axios.post(`${urlBase}`,
      obj
    )
      .then(res => {
        notify('Conta criada com sucesso!', 'sucess')
        return res.data
      })
      .catch((err) => {
        notify('Erro ao criar a conta.', 'error')
        console.error(`Request Failed ${err}`);
      });
  }

}


export default RegisterService;