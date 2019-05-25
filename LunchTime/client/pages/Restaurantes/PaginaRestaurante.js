import React, { Component } from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { styles } from '../../style';
import serverUrl from '../../../connection';

const apiUrl = serverUrl.SERVER_URL + "/restaurant/";
const apiUrl_Produto = serverUrl.SERVER_URL + "/product/";

export default class DadosRestaurante extends Component {
    static navigationOptions = {
        title: "Dados do Restaurante"
    };

    constructor(props) {
        super(props);
        this.state = {
            produtosInfo: [],
            user: {}
        }
    }

    loadProdutos = (idRestaurante) => {
        fetch(apiUrl_Produto + "list/" + idRestaurante, {
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({ produtosInfo: jsonData.produtos })
            console.log(this.state.produtosInfo)
        }).done();
    }

    componentDidMount() {
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 'Erro2');
        this.getRestauranteInfo(userId);
        console.log(userId);
        console.log("State");
        console.log(this.state);
        this.loadProdutos(userId);
    }

    getRestauranteInfo = async (id) => {
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

    render() {

        const data = this.state.produtosInfo;
        let dataDisplay = data.map(function (responseJson) {
            return (
                <View key={responseJson.idProduto}>
                    <View style={styles.dividerProduto}></View>
                    <TouchableOpacity style={styles.cardProduto}>
                        <View>
                            <Image style={styles.imgCard} source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/b2/ee/a1/pizza-frango-catupiry.jpg' }} />
                        </View>
                        <View>
                            <Text style={styles.nameRest}> {responseJson.nomeProduto} </Text>
                            <Text style={styles.catRest}> Preço: R$ {responseJson.valorProduto} </Text>
                            <Text style={styles.catRest}> Tempo de </Text>
                            <Text style={styles.catRest}> Preparo: {responseJson.tempoPreparo} </Text>
                        </View>
                    </TouchableOpacity>
                    <Button
                        buttonStyle={{ backgroundColor: 'red' }}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title="Realizar Pedido"
                    />

                </View>
            )
        });

        return (
            <ScrollView>
                <Card
                    title={this.state.user.nomeRestaurante}
                    image={{ uri: 'https://1.kekantoimg.com/H-2ZscgOpGnwVlJe6WjrU9f9jiY=/fit-in/600x600/s3.amazonaws.com/kekanto_pics/pics/121/21121.jpg' }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        Tipo do Restaurante: {this.state.user.tipoRestaurante}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Rua: {this.state.user.ruaRestaurante}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Número: {this.state.user.numeroRestaurante}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Bairro: {this.state.user.bairroRestaurante}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Cidade: {this.state.user.cidadeRestaurante}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Telefone: {this.state.user.telefoneRestaurante}
                    </Text>
                </Card>
                <Card>
                    {dataDisplay}
                </Card>
            </ScrollView>
        )
    }
}