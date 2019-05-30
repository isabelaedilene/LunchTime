import React from 'react';
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Card, ListItem, Divider, Icon } from 'react-native-elements';
import { styles } from '../../style';
import { Font } from 'expo';
import serverUrl from '../../../connection';

const apiUrl = serverUrl.SERVER_URL+"/client/";
const apiUrl_Restaurante = serverUrl.SERVER_URL+"/restaurant/";

export default class Cliente extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Página Inicial",
            headerRight: (
                <Icon
                    name='person'
                    color='#fff'
                    onPress={navigation.getParam('profile')}
                />
            )
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            restauranteInfo: [],
            fontLoaded: false,
            user: null,
        }
    }

    profile = () => {
        const { navigation } = this.props;
        const user = navigation.getParam('user', 'Erro');
        this.props.navigation.navigate('DadosCliente', { userId: user.user.idCliente });
    };

    async componentWillMount() {
        await Font.loadAsync({
            'Acme-Regular': require('../../../assets/fonts/Acme-Regular.ttf'),
        });
        this.setState({ fontLoaded: true });
        this.loadRestaurants();
        this.loadCliente();
    }

    componentDidMount() {
        const navigation = this.props.navigation.setParams({ profile: this.profile });
    }

    loadCliente = () => {
        const { navigation } = this.props;
        const cliente = navigation.getParam('user', 'Erro');
        this.setState({user: cliente.user.idCliente});
        console.log("CHECKING STATE ID CLIENTE");
        console.log(this.state);
    }

    loadRestaurants = () => {
        fetch(apiUrl_Restaurante, {
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({ restauranteInfo: jsonData.restaurantes })
            console.log(this.state.restauranteInfo)
        }).done();
    };

    render() {
        const data = this.state.restauranteInfo;
        const clienteId = this.state.user;
        let dataDisplay = data.map((responseJson) => {
            return (
                <View key={responseJson.idRestaurante}>
                    <View style={styles.dividerProduto}></View>
                    <TouchableOpacity style={styles.cardProduto} onPress={() => this.props.navigation.navigate('PaginaRestaurante', { userId: responseJson.idRestaurante, clienteId: clienteId })}>
                        <View>
                            <Image style={styles.imgCard} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoeEY-M_PJBZ8rkUS8nfRo-HwkDys9iJkWG3xcdQfIyVRf0c1' }} />
                        </View>
                        <View>
                            <Text style={styles.nameRest}> {responseJson.nomeRestaurante} </Text>
                            <Text style={styles.catRest}> {responseJson.tipoRestaurante} </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            )
        });

        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableHighlight style={styles.btnCad} onPress={() => this.props.navigation.navigate('PesquisarRestaurante')}>
                        <Text style={styles.textStyle}>Pesquisar</Text>
                    </TouchableHighlight>
                    <Card>
                        {dataDisplay}
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

