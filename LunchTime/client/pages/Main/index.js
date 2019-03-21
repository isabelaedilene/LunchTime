import React, { Component } from 'react';
import { View, Button, Text, FlatList, TouchableOpacity } from 'react-native';


const apiUrl = "http://localhost:9090";

class Main extends Component{
    static navigationOptions = {
        title: 'Restaurankktes',
    };

    state = {
        restauranteInfo: [],
        clienteInfo: [],
    };

    componentDidMount() {
        this.loadRestaurants();
        this.loadClients();
    }

    async loadClients() {
        try {
            let response = await fetch(apiUrl+"/client/");
            let responseJson = [];
            try {
                responseJson = await response.json();
            } catch (error) {
                console.log(error);
                responseJson = [];
            }
            this.setState({clienteInfo: responseJson});
            console.log(this.state.clienteInfo);
        } catch (error) {
            console.log(error);
        }
    };

    async loadRestaurants() {
        try {
            let response = await fetch(apiUrl+"/restaurant/");
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

    updateClients = async () => {
        await this.setState({ clienteInfo: [] });
        this.loadClients();
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
                <Button
                    onPress={() => this.props.navigation.navigate('CadastrarCliente')}
                    title="Entrar como cliente"
                    color="#841584"
                    accessibilityLabel="Clique aqui para acessar como cliente."
                />
            </View>
        );
    };
}

export default Main;