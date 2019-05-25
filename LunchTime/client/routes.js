import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import CadastrarRestaurante from './pages/Restaurantes/CadastrarRestaurante';
import CadastrarCliente from './pages/Clientes/CadastrarCliente';
import PesquisarRestaurante from './pages/Restaurantes/PesquisarRestaurante';
import LoginRestaurante from './pages/Login/LoginRestaurante';
import PerfilRestaurante from './pages/Restaurantes/PerfilRestaurante';
import LoginCliente from './pages/Clientes/LoginCliente';
import HomeCliente from './pages/Clientes/HomeCliente';
import DadosRestaurante from './pages/Restaurantes/DadosRestaurante'
import DadosCliente from './pages/Clientes/DadosCliente'
import CadastrarProduto from './pages/Restaurantes/CadastrarProduto'
import DadosProduto from './pages/Restaurantes/DadosProduto'
import PaginaRestaurante from './pages/Restaurantes/PaginaRestaurante'

import { colors } from './style';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main: { screen: Main },
            CadastrarRestaurante: {screen: CadastrarRestaurante},
            CadastrarCliente: {screen: CadastrarCliente},
            PesquisarRestaurante: {screen: PesquisarRestaurante},
            LoginCliente: {screen: LoginCliente},
            LoginRestaurante: {screen: LoginRestaurante},
            PerfilRestaurante: {screen: PerfilRestaurante},
            HomeCliente: {screen: HomeCliente},
            DadosRestaurante: {screen: DadosRestaurante},
            DadosCliente: {screen: DadosCliente},
			CadastrarProduto: {screen: CadastrarProduto},
            DadosProduto: {screen: DadosProduto},
            PaginaRestaurante: {screen: PaginaRestaurante}
        },
        {
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.white,
                headerBackTitle: null,
            },
            headerLayoutPreset: 'center',
        },
    ),
);

export default Routes;