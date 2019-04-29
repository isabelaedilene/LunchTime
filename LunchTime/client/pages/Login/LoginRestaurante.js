import React, { Component } from 'react';
import {Button, ScrollView, Text, TouchableHighlight, TextInput, View,  ActivityIndicator} from 'react-native';
import {styles} from "../../style";
import {Font} from 'expo';

export default class LoginRestaurante extends Component {
    static navigationOptions = {
        title: "Login"
    };

    constructor(){
        super()
        this.state={
            fontLoaded:false,
            emailRestaurante: "",
            senhaRestaurante: "",
            token: "",
            user: ""
        }        
    }

    login = () => {
        fetch('http:192.168.43.238:9090/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailRestaurante: this.state.emailRestaurante,
                senhaRestaurante: this.state.senhaRestaurante
            })
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            this.setState({
                token: jsonData.token,
                user: jsonData.user
            });
            console.log("Dados salvos no componente");
            console.log(this.state)
        }).then((resolve) => {
            if (this.state.user) {
                this.props.navigation.navigate('PerfilRestaurante');
            } else {
                this.props.navigation.navigate('Main');
            }
        });
    };
  
    async componentWillMount(){
        await Font.loadAsync({
            'Acme-Regular': require('../../../assets/fonts/Acme-Regular.ttf'),
        });
        this.setState({fontLoaded: true})
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                {this.state.fontLoaded?(
                    <Text style={styles.textLoginClient}>LunchTime</Text>
                ):(
                    <ActivityIndicator size="large"/>
                )}

                <TextInput style={styles.input}
                    placeholder = 'E-mail Restaurante'
                    onChangeText = {(text) => this.setState({ emailRestaurante: text})}
                    value = {this.emailRestaurante}
                    underlineColorAndroid = 'transparent'
                />
                <TextInput style={styles.input}
                    placeholder = 'Senha Restaurante'
                    onChangeText = {(text) => this.setState({ senhaRestaurante: text})}
                    value = {this.senhaRestaurante}
                    secureTextEntry={true}
                    password={true}
                    underlineColorAndroid = 'transparent'
                />

                
                <TouchableHighlight 
                    style={styles.btnLogin} 
                    onPress={this.login}
                >
                    {this.state.fontLoaded?(
                        <Text style={styles.textEntry}> Login </Text>
                    ):(
                        <ActivityIndicator size="large"/>
                    )}
                </TouchableHighlight>

                {this.state.fontLoaded?(
                    <Text style={styles.textEsqueciSenha}> Esqueci a Senha</Text>
                    ):(
                    <ActivityIndicator size="large"/>
                )}

                <View style={styles.dividerDist}></View>

                {this.state.fontLoaded?(
                    <Text style={styles.textNaoConta}> Ainda não tem uma conta? </Text>
                    ):(
                    <ActivityIndicator size="large"/>
                )}

                <TouchableHighlight 
                    style={styles.btnCad} 
                    onPress={() => this.props.navigation.navigate('CadastrarRestaurante')}
                >
                    {this.state.fontLoaded?(
                        <Text style={styles.textCad}> Quero me Cadastrar! </Text>
                    ):(
                        <ActivityIndicator size="large"/>
                    )}
                </TouchableHighlight>

            </View>
        )
    }
}