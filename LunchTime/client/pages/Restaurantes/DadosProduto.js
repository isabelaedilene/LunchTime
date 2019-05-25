import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import serverUrl from '../../../connection';

const apiUrl = serverUrl.SERVER_URL + "/product/";

export default class DadosProduto extends Component {
    static navigationOptions = {
        title: "Dados do Produto"
    };

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 'Erro2');
        this.getProdutoInfo(userId);
        console.log(userId);
        console.log("State");
        console.log(this.state);
    }

    getProdutoInfo = async (id) => {
        try {
            let response = await fetch(apiUrl + id);
            let responseJson = await response.json();
            this.setState({
                user: responseJson
            });
            console.log("State dentro do método");
            console.log(this.state);
        } catch (error) {
            console.log(error);
        }
    };

    deleteProduto = () => {
        fetch(apiUrl + this.state.user.idProduto, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((resolve) => {
            this.props.navigation.navigate('Main');
        })
    };

    render() {

        return (
            <ScrollView>
                <Card
                    title={this.state.user.nomeProduto}
                    image={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/b2/ee/a1/pizza-frango-catupiry.jpg' }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        Ingredientes: {this.state.user.ingredientesProduto}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Preço: R$ {this.state.user.valorProduto}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Preço Promocional: R$ {this.state.user.valorPromocaoProduto}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Tempo de Preparo: {this.state.user.tempoPreparo}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Data de Inicio da Promoção: {this.state.user.dataInicioPromocao}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Data de Termino da Promoção: {this.state.user.dataFimPromocao}
                    </Text>
                    <Button
                        buttonStyle={{ backgroundColor: 'red' }}
                        icon={<Icon name="warning" />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title="Delete esse produto"
                        onPress={this.deleteProduto}
                    />
                </Card>
            </ScrollView>
        )
    }
}