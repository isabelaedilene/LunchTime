import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { styles } from '../../style';

const apiUrl = "http://localhost:9090/restaurant/search/";

export default class CadastrarRestaurante extends Component {

   static navigationOptions = {
        title: "Cadastrar"
    };

    constructor(props){
        super(props);
        this.state = {
            apiData: [],
            rawData: []
        }
        this.nomeRestaurante = null;
        this.cnpjRestaurante = null;
        this.telefoneRestaurante = null;
        this.emailRestaurante = null;
        this.senhaRestaurante = null;
        this.cepRestaurante = null;
        this.estadoRestaurante = null;
        this.cidadeRestaurante = null;
        this.bairroRestaurante = null;
        this.ruaRestaurante = null;
        this.numeroRestaurante = null;
        this.pontoReferenciaRestaurante = null;
        this.complementoRestaurante = null;
        this.tipoRestaurante = null;
    }

    getButton = () => {
        fetch('', {
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({apiData: jsonData})
            console.log(this.state.apiData)
        }).done();
        this.nomeRestaurante = null;
        this.cnpjRestaurante = null;
        this.telefoneRestaurante = null;
        this.emailRestaurante = null;
        this.senhaRestaurante = null;
        this.cepRestaurante = null;
        this.estadoRestaurante = null;
        this.cidadeRestaurante = null;
        this.bairroRestaurante = null;
        this.ruaRestaurante = null;
        this.numeroRestaurante = null;
        this.pontoReferenciaRestaurante = null;
        this.complementoRestaurante = null;
        this.tipoRestaurante = null;
    };

    saveButton = () => {
        fetch(api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeRestaurante: this.nomeRestaurante,
                cnpjRestaurante: this.cnpjRestaurante,
                telefoneRestaurante: this.telefoneRepresentante,
                emailRestaurante: this.emailRestaurante,
                senhaRestaurante: this.senhaRestaurante,
                nomeRepresentante: this.nomeRepresentante,
                emailRepresentante: this.emailRepresentante,
                telefoneRepresentante: this.telefoneRepresentante,
                cepRestaurante: this.cepRestaurante,
                estadoRestaurante: this.estadoRestaurante,
                cidadeRestaurante: this.cidadeRestaurante,
                bairroRestaurante: this.bairroRestaurante,
                ruaRestaurante: this.ruaRestaurante,
                numeroRestaurante: this.numeroRestaurante,
                pontoReferenciaRestaurante: this.pontoReferenciaRestaurante,
                complementoRestaurante: this.complementoRestaurante,
                tipoRestaurante: this.tipoRestaurante
            })
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            this.setState({rawData: jsonData});
            console.log(this.state.rawData)
        }).done();
        this.nomeRestaurante = null;
        this.cnpjRestaurante = null;
        this.telefoneRestaurante = null;
        this.emailRestaurante = null;
        this.senhaRestaurante = null;
        this.cepRestaurante = null;
        this.estadoRestaurante = null;
        this.cidadeRestaurante = null;
        this.bairroRestaurante = null;
        this.ruaRestaurante = null;
        this.numeroRestaurante = null;
        this.pontoReferenciaRestaurante = null;
        this.complementoRestaurante = null;
        this.tipoRestaurante = null;
    }

    render() {
        const data = this.state.apiData;
        let dataDisplay = data.map(function (jsonData) {
            return (
                <View key={jsonData.idRestaurante}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color: '#511099'}}>{jsonData.nomeRestaurante} | </Text>
                        <Text style={{color: '#FF5722'}}>{jsonData.cnpjRestaurante} | </Text>
                        <Text style={{color: '#511099'}}>{jsonData.telefoneRestaurante} | </Text>
                        <Text style={{color: '#FF5722'}}>{jsonData.emailRestaurante} | </Text>
                        <Text style={{color: '#511099'}}>{jsonData.senhaRestaurante} | </Text>
                        <Text style={{color: '#511099'}}>{jsonData.cepRestaurante} | </Text>
                        <Text style={{color: '#FF5722'}}>{jsonData.estadoRestaurante} | </Text>
                        <Text style={{color: '#511099'}}>{jsonData.cidadeRestaurante} | </Text>
                        <Text style={{color: '#FF5722'}}>{jsonData.bairroRestaurante} | </Text>
                        <Text style={{color: '#511099'}}>{jsonData.ruaRestaurante} | </Text>
                        <Text style={{color: '#FF5722'}}>{jsonData.numeroRestaurante} | </Text>
                        <Text style={{color: '#511099'}}>{jsonData.pontoReferenciaRestaurante} | </Text>
                        <Text style={{color: '#FF5722'}}>{jsonData.complementoRestaurante} | </Text>
                        <Text style={{color: '#511099'}}>{jsonData.tipoRestaurante} | </Text>
                    </View>
                </View>
            )
        });

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={{padding: 10}}>Dados</Text>
                    <View style={styles.divider}></View>
                    <TextInput style={styles.input}
                               placeholder = 'Nome Restaurante'
                               onChangeText = {(text) => {this.nomeRestaurante = text}}
                               value = {this.nomeRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'CNPJ Restaurante'
                               onChangeText = {(text) => {this.cnpjRestaurante = text}}
                               value = {this.cnpjRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Telefone Restaurante'
                               onChangeText = {(text) => {this.telefoneRestaurante = text}}
                               value = {this.telefoneRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
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
                    <Text style={{padding: 10}}>Dados de endereço</Text>
                    <View style={styles.divider}></View>
                    <TextInput style={styles.input}
                               placeholder = 'CEP Restaurante'
                               onChangeText = {(text) => {this.cepRestaurante = text}}
                               value = {this.cepRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Estado Restaurante'
                               onChangeText = {(text) => {this.estadoRestaurante = text}}
                               value = {this.estadoRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Cidade Restaurante'
                               onChangeText = {(text) => {this.cidadeRestaurante = text}}
                               value = {this.cidadeRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Bairro Restaurante'
                               onChangeText = {(text) => {this.bairroRestaurante = text}}
                               value = {this.bairroRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Rua Restaurante'
                               onChangeText = {(text) => {this.ruaRestaurante = text}}
                               value = {this.ruaRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Número Restaurante'
                               onChangeText = {(text) => {this.numeroRestaurante = text}}
                               value = {this.numeroRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Ponto Referência Restaurante'
                               onChangeText = {(text) => {this.pontoReferenciaRestaurante = text}}
                               value = {this.pontoReferenciaRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Complemento Restaurante'
                               onChangeText = {(text) => {this.complementoRestaurante = text}}
                               value = {this.complementoRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Nome Restaurante'
                               onChangeText = {(text) => {this.tipoRestaurante = text}}
                               value = {this.tipoRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <ScrollView contentContainerStyle={styles.container}>
                        {dataDisplay}
                    </ScrollView>
                    <Button title="Registrar" onPress={this.saveButton} color="#841584"/>
                </ScrollView>
            </View>
        )
    }
}

export default CadastrarRestaurante;