import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ProductService from '../../../Services/Product/ProductService';
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from 'react-router-dom';

const service = new ProductService()

function ProductList() {

    const navigate = useNavigate();

    const { empresa } = useContext(AuthContext)

    const [pageSize, setPageSize] = useState(10)
    const [page, setPage] = useState(0)

    const [items, setItems] = useState([])

    useEffect(() => {

        if (!empresa) return null;
        console.log(empresa)
        getData()
        async function getData() {
            const apiResponse = await service.getProdutos(empresa?.idEmpresa)
            console.log(apiResponse)
            setItems(apiResponse)
        }
        
    }, [empresa])

    return (
        <DataGrid
            sortable={true}
            filter={true}
            density="compact"
            autoWidth={true}
            rowHeight={70}
            columns={columns}
            getRowId={(row) => row.codigo}
            onCellClick={(params) => {
                console.log(params.row)
                navigate(`/dashboard/edit-product/${params.row.codigo}`)
            }}
            rows={items}
            page={page}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            onPageChange={(newPage) => setPage(newPage)}

            rowsPerPageOptions={[10, 20, 30]}
            autoHeight={true}
        />
    )
}

const columns = [
    {
        field: "codigo",
        headerName: "Código do produto",
        width: 290
    },
    {
        field: "nome",
        headerName: "Nome",
        width: 290
    },
    {
        field: "precoVenda",
        headerName: "Preço",
        width: 200
    },
    {
        field: "estoque",
        headerName: "Quantidade em estoque",
        width: 200
    },
    {
        field: "marca",
        headerName: "Marca",
        width: 220
    },
    {
        field: "peso",
        headerName: "Peso",
        width: 120
    },
    {
        field: "categoria",
        headerName: "Categoria",
        width: 180
    }
];

export default ProductList;