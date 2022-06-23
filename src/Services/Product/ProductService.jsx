import axios from 'axios';
import { notify } from '../../Components/Notify/Notify';

const urlBase = 'http://localhost:8080/produtos';
const headers = {
  'Content-Type': 'application/json'
};

class ProductService {

  async getProdutos(idEmpresa) {
    return await axios.get(`${urlBase}/listar-produtos/${idEmpresa}`, {
      headers: headers
    })
      .then(res => res.data)
      .catch((err) => {
        console.error(`Request Failed ${err}`);
      });
  }

  async postProdutos(obj, idEmpresa) {
    return await axios.post(`${urlBase}/criar-produto/${idEmpresa}`,
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

  async putProduct(obj, idEmpresa, idProduto) {
    return await axios.put(`${urlBase}/editar-produto/${idEmpresa}/${idProduto}`,
      obj
    )
      .then(res => {
        notify('Produto editado com sucesso!', 'sucess')
        return res.data
      })
      .catch((err) => {
        notify('Erro ao editar o Produto.', 'error')
        console.error(`Request Failed ${err}`);
        return null
      });
  }

    async patchUpload(obj, cnpj) {
        return await axios.patch(`${urlBase}/upload-txt/${cnpj}`,
            obj
        )
            .then(res => {
                notify('Upload carregado com sucesso!', 'sucess')
                return res.data
            })
            .catch((err) => {
                notify('Erro ao tentar upload.', 'error')
                console.error(`Request Failed ${err}`);
                return null
            });
    }

  async getCsv(idEmpresa) {
    return await axios.get(`${urlBase}/relatorio-csv/${idEmpresa}`
    )
      .then(res => {
        notify('Download do arquivo CSV feito com sucesso!', 'sucess')
        //return res.data
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'produto.csv'); //or any other extension
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        notify('Erro ao baixar o arquivo.', 'error')
        console.error(`Request Failed ${err}`);
        return null
      });
  }
}

export default ProductService;