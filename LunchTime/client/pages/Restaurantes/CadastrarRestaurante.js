import React, { Component } from 'react';
import {View, Button, Text, FlatList, TouchableOpacity, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import { styles } from '../../style';
import serverUrl from '../../../connection';

const apiUrl = serverUrl.SERVER_URL+"/restaurant/";

class CadastrarRestaurante extends Component {
    static navigationOptions = {
        title: "Cadastrar"
    };

    constructor(props){
        super(props);
        this.state = {
            apiData: [],
            rawData: [],
            nomeRestaurante: '',
            cnpjRestaurante: '',
            telefoneRestaurante: '',
            emailRestaurante: '',
            senhaRestaurante: '',
            cepRestaurante: '',
            estadoRestaurante: '',
            cidadeRestaurante: '',
            bairroRestaurante: '',
            ruaRestaurante: '',
            numeroRestaurante: '',
            pontoReferenciaRestaurante: '',
            complementoRestaurante: '',
            tipoRestaurante: '',
        };

    }

    saveButton = () => {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeRestaurante: this.state.nomeRestaurante,
                cnpjRestaurante: this.state.cnpjRestaurante,
                telefoneRestaurante: this.state.telefoneRestaurante,
                emailRestaurante: this.state.emailRestaurante,
                senhaRestaurante: this.state.senhaRestaurante,
                cepRestaurante: this.state.cepRestaurante,
                estadoRestaurante: this.state.estadoRestaurante,
                cidadeRestaurante: this.state.cidadeRestaurante,
                bairroRestaurante: this.state.bairroRestaurante,
                ruaRestaurante: this.state.ruaRestaurante,
                numeroRestaurante: this.state.numeroRestaurante,
                pontoReferenciaRestaurante: this.state.pontoReferenciaRestaurante,
                complementoRestaurante: this.state.complementoRestaurante,
                tipoRestaurante: this.state.tipoRestaurante
            })
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            this.setState({rawData: jsonData});
            console.log(this.state.rawData)
        }).then((resolve) => {
            this.props.navigation.navigate('LoginRestaurante');
        });
    };

    render() {
        const data = this.state.apiData;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{padding: 10}}>Dados</Text>
                    <View style={styles.divider}></View>
                    <TextInput style={styles.input}
                               placeholder = 'Nome Restaurante'
                               onChangeText = {(text) => this.setState({nomeRestaurante: text})}
                               value = {this.nomeRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'CNPJ Restaurante'
                               onChangeText = {(text) => this.setState({cnpjRestaurante: text})}
                               value = {this.cnpjRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Telefone Restaurante'
                               onChangeText = {(text) => this.setState({telefoneRestaurante: text})}
                               value = {this.telefoneRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'E-mail Restaurante'
                               onChangeText = {(text) => this.setState({emailRestaurante: text})}
                               value = {this.emailRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Senha Restaurante'
                               onChangeText = {(text) => this.setState({senhaRestaurante: text})}
                               value = {this.senhaRestaurante}
                               secureTextEntry={true}
                               password={true}
                               underlineColorAndroid = 'transparent'
                    />
                    <Text style={{padding: 10}}>Dados de endereço</Text>
                    <View style={styles.divider}></View>
                    <TextInput style={styles.input}
                               placeholder = 'CEP Restaurante'
                               onChangeText = {(text) => this.setState({cepRestaurante: text})}
                               value = {this.cepRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Estado Restaurante'
                               onChangeText = {(text) => this.setState({estadoRestaurante: text})}
                               value = {this.estadoRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Cidade Restaurante'
                               onChangeText = {(text) => this.setState({cidadeRestaurante: text})}
                               value = {this.cidadeRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Bairro Restaurante'
                               onChangeText = {(text) => this.setState({bairroRestaurante: text})}
                               value = {this.bairroRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Rua Restaurante'
                               onChangeText = {(text) => this.setState({ruaRestaurante: text})}
                               value = {this.ruaRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Número Restaurante'
                               onChangeText = {(text) => this.setState({numeroRestaurante: text})}
                               value = {this.numeroRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Ponto Referência Restaurante'
                               onChangeText = {(text) => this.setState({pontoReferenciaRestaurante: text})}
                               value = {this.pontoReferenciaRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Complemento Restaurante'
                               onChangeText = {(text) => this.setState({complementoRestaurante: text})}
                               value = {this.complementoRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Nome Restaurante'
                               onChangeText = {(text) => this.setState({tipoRestaurante: text})}
                               value = {this.tipoRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <Button title="Registrar" onPress={this.saveButton} color="#841584"/>
                </View>
            </ScrollView>
        )
    }
}

export default CadastrarRestaurante;
