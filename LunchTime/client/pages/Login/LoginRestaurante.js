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
            fontLoaded:false
        }        
    }
  
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
                    onChangeText = {(text) => {this.emailRestaurante = text}}
                    value = {this.emailRestaurante}
                    underlineColorAndroid = 'transparent'
                />
                <TextInput style={styles.input}
                    placeholder = 'Senha Restaurante'
                    onChangeText = {(text) => {this.senhaRestaurante = text}}
                    value = {this.senhaRestaurante}
                    secureTextEntry={true}
                    password={true}
                    underlineColorAndroid = 'transparent'
                />

                
                <TouchableHighlight 
                    style={styles.btnLogin} 
                    onPress={() =>  this.props.navigation.navigate('PerfilRestaurante')}
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