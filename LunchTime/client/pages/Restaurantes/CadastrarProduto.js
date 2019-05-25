import React, { Component } from 'react';
import {View, Button, Text, FlatList, TouchableOpacity, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import { styles } from '../../style';
import serverUrl from '../../../connection';

const apiUrl = serverUrl.SERVER_URL+"/product/";

class CadastrarProduto extends Component {
    static navigationOptions = {
        title: "Cadastrar"
    };

    constructor(props){
        super(props);
        this.state = {
            apiData: [],
            rawData: [],
            nomeProduto: '',
            ingredientesProduto: '',
            valorProduto: '',
            valorPromocaoProduto: '',
            tempoPreparo: '',
            dataInicioPromocao: '',
            dataFimPromocao: '',
            idRestaurante_fk: '',
        };	
    }
	componentDidMount() {
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 'Erro2');
        this.setState({idRestaurante_fk: userId});
    }

    saveButton = () => {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeProduto: this.state.nomeProduto,
                ingredientesProduto: this.state.ingredientesProduto,
                valorProduto: this.state.valorProduto,
                valorPromocaoProduto: this.state.valorPromocaoProduto,
                tempoPreparo: this.state.tempoPreparo,
                dataInicioPromocao: this.state.dataInicioPromocao,
                dataFimPromocao: this.state.dataFimPromocao,
                idRestaurante_fk: this.state.idRestaurante_fk,
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
                               placeholder = 'Nome Produto'
                               onChangeText = {(text) => this.setState({nomeProduto: text})}
                               value = {this.nomeProduto}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Ingredientes Produto'
                               onChangeText = {(text) => this.setState({ingredientesProduto: text})}
                               value = {this.ingredientesProduto}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Valor Produto'
                               onChangeText = {(text) => this.setState({valorProduto: text})}
                               value = {this.valorProduto}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Valor Promoção Produto'
                               onChangeText = {(text) => this.setState({valorPromocaoProduto: text})}
                               value = {this.valorPromocaoProduto}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Tempo Preparo'
                               onChangeText = {(text) => this.setState({tempoPreparo: text})}
                               value = {this.tempoPreparo}
                               underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={styles.input}
                               placeholder = 'Data Início Promocao'
                               onChangeText = {(text) => this.setState({dataInicioPromocao: text})}
                               value = {this.dataInicioPromocao}
                               underlineColorAndroid = 'transparent'
                    />
					<TextInput style={styles.input}
                               placeholder = 'Data Fim Promocao'
                               onChangeText = {(text) => this.setState({dataFimPromocao: text})}
                               value = {this.dataFimPromocao}
                               underlineColorAndroid = 'transparent'
                    />
                    
                    <Button title="Registrar" onPress={this.saveButton} color="#841584"/>
                </View>
            </ScrollView>
        )
    }
}

export default CadastrarProduto;
