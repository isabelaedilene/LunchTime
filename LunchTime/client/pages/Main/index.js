import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ActivityIndicator} from 'react-native';
import { styles} from '../../style';
import {Font} from 'expo';

const apiUrl = "http://192.168.25.6:9090";

class Main extends Component{
    static navigationOptions = {
        title: 'LunchTime',
    }; 

    constructor(){
        super()
        this.state={
            fontLoaded:false
        }        
    }

    async componentWillMount(){
        await Font.loadAsync({
            'AlfaSlabOne-Regular': require('../../../assets/fonts/AlfaSlabOne-Regular.ttf'),
        });
        this.setState({fontLoaded: true})
    }

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
                <View style={styles.posix}>

                        <TouchableHighlight 
                            style={styles.btnCliente} 
                            onPress={() => this.props.navigation.navigate('LoginCliente')}
                        >
                            {this.state.fontLoaded?(
                                <Text style={styles.textEntry}>ENTRAR COMO CLIENTE</Text>
                            ):(
                                <ActivityIndicator size="large"/>
                            )}
                        </TouchableHighlight>

                        <TouchableHighlight 
                            style={styles.btnRestaurante}
                            onPress={() => this.props.navigation.navigate('LoginRestaurante')}
                        >
                            {this.state.fontLoaded?(
                                <Text style={styles.textEntry}>ENTRAR COMO RESTAURANTE </Text>
                            ):(
                                <ActivityIndicator size="large"/>
                            )}
                        </TouchableHighlight>  
                </View>
                    
            </View>
        );
    };
}

export default Main;