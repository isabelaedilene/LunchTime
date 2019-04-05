import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import CadastrarRestaurante from './pages/Restaurantes/CadastrarRestaurante';
import CadastrarCliente from './pages/Clientes/CadastrarCliente';
import PesquisarRestaurante from './pages/Restaurantes/PesquisarRestaurante';
import LoginRestaurante from './pages/Login/LoginRestaurante';
import PerfilRestaurante from './pages/Restaurantes/PerfilRestaurante';
import LoginCliente from './pages/Clientes/LoginCliente';

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