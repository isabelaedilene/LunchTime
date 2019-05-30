import React, { Component } from 'react';
import {TouchableOpacity, View, Text, ScrollView, Image, Modal, Alert} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { styles } from '../../style';
import serverUrl from '../../../connection';

import SocketIOClient from 'socket.io-client';

const apiUrl = serverUrl.SERVER_URL + "/restaurant/";
const apiUrl_Produto = serverUrl.SERVER_URL + "/product/";
const url = serverUrl.SERVER_URL;
const clientUrl = serverUrl.SERVER_URL+"/client/";

export default class DadosRestaurante extends Component {
    static navigationOptions = {
        title: "Dados do Restaurante"
    };

    constructor(props) {
        super(props);
        this.state = {
            produtosInfo: [],
            user: {},
            pedido: {},
            cliente: {},
            modalVisible: false,
        };
        this.socket = SocketIOClient(url);
        this.socket.on('pedido', (data) => {
            console.log('0006 - Resposta recebida do restaurante', data);
            this.setState({
                pedido: data,
                modalVisible: true
            });
        });
    }

    loadProdutos = (idRestaurante) => {
        fetch(apiUrl_Produto + "list/" + idRestaurante, {
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            this.setState({ produtosInfo: jsonData.produtos })
        }).done();
    };

    realizarPedido = (data) => {
        try {
            const pedido = {
                idRestaurante: this.state.user.idRestaurante,
                idCliente: this.state.cliente.idCliente,
                IdProduto: data.idProduto,
                valorCompra: data.valorProduto,
                horarioChegada: data.tempoPreparo,
                statusPedido: "realizado"
            };
            console.log("Dados do pedido 0001");
            console.log(pedido);
            this.socket.emit('pedidoCliente', pedido)
        } catch (e) {
            console.log(e)
        }

    };

    componentDidMount() {
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 'Erro2');
        const clienteId = navigation.getParam('clienteId', 'Erro');
        console.log("Component Did Mount");
        console.log(clienteId);
        this.getRestauranteInfo(userId);
        this.getClienteInfo(clienteId);
        this.loadProdutos(userId);
    }

    getClienteInfo = async (id) => {
        try {
            let response = await fetch(clientUrl + id);
            let responseJson = await response.json();
            this.setState({
                cliente: responseJson
            });
        } catch (error) {
            console.log(error);
        }
    };

    getRestauranteInfo = async (id) => {
        try {
            let response = await fetch(apiUrl + id);
            let responseJson = await response.json();
            this.setState({
                user: responseJson
            });
        } catch (error) {
            console.log(error);
        }
    };

    abrirModal = () => {
        this.setState({
            modalVisible: true
        })
    };

    fecharModal = () => {
        this.setState({
            modalVisible: false
        });
    };

    render() {

        const data = this.state.produtosInfo;
        const msgOK =
            <Text>
                Há um novo pedido.
                {this.state.pedido.idCliente_fk}
                {this.state.pedido.idRestaurante_fk}
                {this.state.pedido.statusPedido}
            </Text>;

        const msgFail = <Text>Não há novos pedidos</Text>;

        let dataDisplay = data.map((produto) => {
            return(
                <View key={produto.idProduto}>
                    <View style={styles.dividerProduto}></View>
                    <TouchableOpacity style={styles.cardProduto}>
                        <View>
                            <Image style={styles.imgCard} source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/b2/ee/a1/pizza-frango-catupiry.jpg' }} />
                        </View>
                        <View>
                            <Text style={styles.nameRest}> {produto.nomeProduto} </Text>
                            <Text style={styles.catRest}> Preço: R$ {produto.valorProduto} </Text>
                            <Text style={styles.catRest}> Tempo de </Text>
                            <Text style={styles.catRest}> Preparo: {produto.tempoPreparo} </Text>
                        </View>
                    </TouchableOpacity>
                    <Button
                        onPress={() => this.realizarPedido(produto)}
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
                <View style={{marginTop: 22}}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal de Pedido', 'Modal fechado');
                        }}>
                        <View style={{marginTop: 22}}>
                            <View>
                                <Text>Atualizando Meu Pedido...</Text>
                                {this.state.pedido.statusPedido === "recebido" ? msgOK : msgFail}
                                <Button
                                    title="Fechar Modal"
                                    onPress={() => {
                                        this.fecharModal();
                                    }}>
                                    >
                                </Button>
                            </View>
                        </View>
                    </Modal>
                    <Button
                        title="Atualizar Pedidos"
                        onPress={() => {
                            this.abrirModal();
                        }}>
                        >
                    </Button>
                </View>
                <Card>
                    {dataDisplay}
                </Card>
            </ScrollView>
        )
    }
}