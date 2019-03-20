import React, { Component } from 'react';
import { View, Button, Text, FlatList, TouchableOpacity } from 'react-native';


const apiUrl = "http://localhost:9090/restaurant/";

class Main extends Component{
    static navigationOptions = {
        title: 'Restaurankktes',
    };

    state = {
        restauranteInfo: [],
    };

    componentDidMount() {
        this.loadRestaurants();
    }

    async loadRestaurants() {
        try {
            let response = await fetch(apiUrl);
            let responseJson = [];
            try {
                responseJson = await response.json();
            } catch (error) {
                console.log(error);
                responseJson = [];
            }
            this.setState({restauranteInfo: responseJson});
            console.log(this.state.restauranteInfo);
        } catch (error) {
            console.log(error);
        }
    };

    updateRestaurants = async () => {
        await this.setState({ restauranteInfo: [] });
        this.loadRestaurants();
    };

    render(){
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('CadastrarRestaurante')}
                    title="Entrar como restaurante"
                    color="#841584"
                    accessibilityLabel="Clique aqui para acessar como restaurante."
                />
                {/*<Button*/}
                    {/*onPress={cadastrarCliente}*/}
                    {/*title="Entrar como cliente"*/}
                    {/*color="#841584"*/}
                    {/*accessibilityLabel="Clique aqui para acessar como cliente."*/}
                {/*/>*/}
            </View>
        );
    };
}

export default Main;