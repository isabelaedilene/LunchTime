import React from 'react';
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Card, ListItem, Divider, Icon } from 'react-native-elements';
import { styles } from '../../style';
import { Font } from 'expo';


const apiUrl = "http://192.168.1.23:9090/client/";
const apiUrl_Restaurante = "http://192.168.1.23:9090/restaurant/";

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
        super(props)
        this.state = {
            restauranteInfo: [],
            fontLoaded: false,
            user: "",
        }
    }

    profile = () => {
        const { navigation } = this.props;
        const user = navigation.getParam('user', 'Erro');
        console.log("Dentro do perfil");
        console.log(user.user.idCliente);
        this.props.navigation.navigate('DadosCliente', { userId: user.user.idCliente });
    };

    async componentWillMount() {
        await Font.loadAsync({
            'Acme-Regular': require('../../../assets/fonts/Acme-Regular.ttf'),
        });
        this.setState({ fontLoaded: true });
        this.loadRestaurants();
    }

    componentDidMount() {
        const navigation = this.props.navigation.setParams({ profile: this.profile });
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
    }

    render() {
        const data = this.state.restauranteInfo;
        let dataDisplay = data.map(function (responseJson) {
            return (
                <View key={responseJson.idRestaurante}>

                    <TouchableOpacity style={styles.card}>
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
            <ScrollView contentContainerStyle={styles.container}>
                {dataDisplay}
            </ScrollView>
        );
    }
}

