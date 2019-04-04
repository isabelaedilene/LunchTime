import React, { Component } from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from "../../style";

export default class LoginRestaurante extends Component {
    static navigationOptions = {
        title: "Login"
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={{padding: 10}}>Login</Text>
                <View style={styles.divider}></View>
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
                <Button title="Entrar" onPress={() => this.props.navigation.navigate('PerfilRestaurante')} color="#841584"/>
                <Button title="Cadastre-se" onPress={() => this.props.navigation.navigate('CadastrarRestaurante')}/>
            </View>
        )
    }
}