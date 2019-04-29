import React, { Component } from 'react';
import {View, Button, Text, FlatList, TouchableOpacity, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import { styles } from '../../style';

class PerfilRestaurante extends Component {
    static navigationOptions = {
        title: "Meu Perfil"
    };

    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Text>Tela Onde Ficará os Pedidos recebidos do Resraurante</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    /*
    constructor(props){
        super(props);
        this.state = {
            apiData: [],
            rawData: [],
            nomeRestaurante: null,
            cnpjRestaurante: null,
            telefoneRestaurante: null,
            emailRestaurante: null,
            senhaRestaurante: null,
            cepRestaurante: null,
            estadoRestaurante: null,
            cidadeRestaurante: null,
            bairroRestaurante: null,
            ruaRestaurante: null,
            numeroRestaurante: null,
            pontoReferenciaRestaurante: null,
            complementoRestaurante: null,
            tipoRestaurante: null,
        };
    }

    componentDidMount() {
        //this.getButton();
    }

    async getButton() {
        try {
            console.log('Dentro do componente de perfil do restaurante');
            let response = await fetch('http://192.168.43.248:9090/restaurant/1',);
            let responseJson = await response.json();
            console.log(responseJson);
            this.setState({
                apiData: responseJson,
            });
            this.setState({
                nomeRestaurante: this.state.apiData.nomeRestaurante,
                cnpjRestaurante: this.state.apiData.cnpjRestaurante,
                telefoneRestaurante: this.state.apiData.telefoneRestaurante,
                emailRestaurante: this.state.apiData.emailRestaurante,
                senhaRestaurante: this.state.apiData.senhaRestaurante,
                cepRestaurante: this.state.apiData.cepRestaurante,
                estadoRestaurante: this.state.apiData.estadoRestaurante,
                cidadeRestaurante: this.state.apiData.cidadeRestaurante,
                bairroRestaurante: this.state.apiData.bairroRestaurante,
                ruaRestaurante: this.state.apiData.ruaRestaurante,
                numeroRestaurante: this.state.apiData.numeroRestaurante,
                pontoReferenciaRestaurante: this.state.apiData.pontoReferenciaRestaurante,
                complementoRestaurante: this.state.apiData.complementoRestaurante,
                tipoRestaurante: this.state.apiData.tipoRestaurante,
            });
        } catch (error) {
            console.error(error);
        }
    };

    saveButton = () => {
        console.log(this.state);
        fetch('http:192.168.43.248:9090/restaurant/1', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeRestaurante: this.state.nomeRestaurante,
                cnpjRestaurante: this.state.cnpjRestaurante,
                telefoneRestaurante: this.state.telefoneRepresentante,
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
        const apiData = this.state;
        return(
            <View>
                <ScrollView>
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({nomeRestaurante: text})}
                               value={this.state.apiData.nomeRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({emailRestaurante: text})}
                               value={this.state.apiData.emailRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({telefoneRestaurante: text})}
                               value = {this.state.apiData.telefoneRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({cnpjRestaurante: text})}
                               value = {this.state.apiData.cnpjRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({senhaRestaurante: text})}
                               value = {this.state.apiData.senhaRestaurante}
                               secureTextEntry={true}
                               password={true}
                               underlineColorAndroid = 'transparent'
                    />
                    <Text style={{padding: 10}}>Dados de endereço</Text>
                    <View style={styles.divider}></View>
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({cepRestaurante: text})}
                               value = {this.state.apiData.cepRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({estadoRestaurante: text})}
                               value = {this.state.apiData.estadoRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({cidadeRestaurante: text})}
                               value = {this.state.apiData.cidadeRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({bairroRestaurante: text})}
                               value = {this.state.apiData.bairroRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({ruaRestaurante: text})}
                               value = {this.state.apiData.ruaRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({numeroRestaurante: text})}
                               value = {this.state.apiData.numeroRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({pontoReferenciaRestaurante: text})}
                               value = {this.state.apiData.pontoReferenciaRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({complementoRestaurante: text})}
                               value = {this.state.apiData.complementoRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               onChangeText = {(text) => this.setState({tipoRestaurante: text})}
                               value = {this.state.apiData.tipoRestaurante}
                               underlineColorAndroid = 'transparent'
                    />
                    <Button title="Salvar" onPress={this.saveButton} color="#841584"/>
                </ScrollView>
            </View>
        )
    }

    */
}

export default PerfilRestaurante;
