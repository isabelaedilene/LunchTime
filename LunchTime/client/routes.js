import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import CadastrarRestaurante from './pages/Restaurantes/CadastrarRestaurante';
import CadastrarCliente from './pages/Clientes/CadastrarCliente';
import { colors } from './style';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main: { screen: Main },
            CadastrarRestaurante: {screen: CadastrarRestaurante},
            CadastrarCliente: {screen: CadastrarCliente},
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