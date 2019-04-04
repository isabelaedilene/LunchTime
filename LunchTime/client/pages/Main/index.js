import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { styles} from '../../style';

const apiUrl = "http://localhost:9090";

class Main extends Component{
    static navigationOptions = {
        title: 'lunchTime',
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
            <View style={styles.container}>

                <TouchableHighlight 
                    style={styles.btnCliente} 
                    onPress={() => this.props.navigation.navigate('CadastrarCliente')}
                >
                    <Text style={styles.textCliente}>ENTRAR COMO CLIENTE</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={styles.btnRestaurante}
                    onPress={() => this.props.navigation.navigate('LoginRestaurante')}
                >
                    <Text style={styles.textRestaurante}>ENTRAR COMO RESTAURANTE</Text>
                </TouchableHighlight>  
				<TouchableHighlight 
                    style={styles.btnRestaurante}
                    onPress={() => this.props.navigation.navigate('PesquisarRestaurante')}
                >
                    <Text style={styles.textRestaurante}>PESQUISAR RESTAURANTE</Text>
                </TouchableHighlight>
            </View>
        );
    };
}

export default Main;