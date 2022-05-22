import { Typography, Grid } from '@mui/material';
import React, { useContext } from 'react';
import CardDashboard from '../../../Components/CardDashboard/CardDashboard';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { AuthContext } from '../../../Context/AuthContext';
import Glasses from '../../../Assets/Image/Specs-amico.svg';
import Box from '../../../Assets/Image/Self checkout-amico.svg';
import Client from '../../../Assets/Image/Bookshop-bro.svg';
import Report from '../../../Assets/Image/Online report-amico.svg';

function Home() {

    const { empresa } = useContext(AuthContext)

    return (
        <Dashboard>
            <Grid container justifyContent={'space-between'}>
                <Grid item xs={12} textAlign={'center'} marginBottom={5}>
                    <Typography variant="h3">Olá, {empresa?.nomeFantasia}</Typography>
                    <Typography variant="h5">Olha essas dicas que preparamos para você.</Typography>
                </Grid>
                    <CardDashboard
                        title={'Produtos'}
                        body={'Seus produtos podem ser vistos ou criados na página de produtos.'}
                        img={Glasses}
                        alt={'Óculos'}
                        button={'Criar novo produto'}
                        urlPage={'/dashboard/new-product'}
                    />
                     <CardDashboard
                        title={'Caixa'}
                        body={'Quer realizar uma venda? Utilize o caixa para isso!'}
                        img={Box}
                        alt={'Caixa'}
                        button={'Ir para o caixa'}
                        url={''}
                    />
                     <CardDashboard
                        title={'Clientes'}
                        body={'Sabe aquele cliente que já é de casa? Adiciona ele aqui na loja para ter sempre o contato dele.'}
                        img={Client}
                        alt={'Cliente'}
                        button={'Adicionar cliente'}
                        urlPage={'/dashboard/new-client'}
                    />
                    <CardDashboard
                        title={'Relatório'}
                        body={'Ta afim de ver quanto vendeu esse mês? Quais produtos estão saindo bastante? Você pode olhar em relatórios.'}
                        img={Report}
                        alt={'Cliente'}
                        button={'Olhar relatórios'}
                        url={''}
                    />
            </Grid>
        </Dashboard>
    );
}

export default Home;