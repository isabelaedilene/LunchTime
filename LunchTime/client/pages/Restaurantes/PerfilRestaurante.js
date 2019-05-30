import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TouchableHighlight, Modal, Alert, Button } from 'react-native';
import { Card, ListItem, Divider, Icon } from 'react-native-elements';
import serverUrl from '../../../connection';
import { styles } from '../../style';

const apiUrl = serverUrl.SERVER_URL + "/product/";
const url = serverUrl.SERVER_URL;
const savePedido = serverUrl.SERVER_URL + /pedido/;
import SocketIOClient from 'socket.io-client';

const pedidos = [
    {
        nomeCliente: 'Ronan Felipe',
        nomePrato: 'Pizza Frango Catupiry',
        imagemPedido: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/b2/ee/a1/pizza-frango-catupiry.jpg'
    },
    {
        nomeCliente: 'Isabela Edilene',
        nomePrato: 'Sanduiche Especial',
        imagemPedido: 'https://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/linha-signature/mcpicanha.png'
    },
    {
        nomeCliente: 'Daniel Vargas',
        nomePrato: 'Pizza Vegana',
        imagemPedido: 'https://www.mundoboaforma.com.br/wp-content/uploads/2017/06/pizza-vegana-620x330.jpg'
    },
    {
        nomeCliente: 'Fernando',
        nomePrato: 'Lamen Japonês',
        imagemPedido: 'https://www.dicasdemulher.com.br/wp-content/uploads/2018/04/lamen-capa.jpg'
    },
    {
        nomeCliente: 'Davi',
        nomePrato: 'Sanduiche Triplo',
        imagemPedido: 'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.br/files/StackerTriplo_detail.png'
    }
];

class PerfilRestaurante extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Meu Perfil",
            headerRight: (
                <Icon
                    name='person'
                    color='#fff'
                    onPress={navigation.getParam('profile')}
                />
            )
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            produtosInfo: [],
            user: "",
            pedido: {},
            modalVisible: false,
        };
        this.socket = SocketIOClient(url);
        this.socket.on('pedidoRestaurante', (data) => {
            console.log('0003 Pedido do cliente recebido pelo servidor e enviado ao cliente', data);
            data.statusPedido = "recebido";
            this.setState({
                pedido: data,
                modalVisible: true
            });
            console.log(this.state);
        })
    }

    sendRespAoCliente = () => {
        fetch(savePedido, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                IdProduto: this.state.pedido.IdProduto,
                idRestaurante_fk: this.state.pedido.idRestaurante,
                valorCompra: this.state.pedido.valorCompra,
                horarioChegada: this.state.pedido.horarioChegada,
                statusPedido: this.state.pedido.horarioChegada,
                idCliente_fk: this.state.pedido.idCliente
            })
        }).then((responseData) => {
            return responseData.json();
        });
        console.log("0004 enviando ao server");
        this.socket.emit('respAoCliente', this.state.pedido);
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
        if (this.state.pedido.hasOwnProperty('idCliente')){
            this.sendRespAoCliente();
            console.log("0004 State ao enviar resposta");
            console.log(this.state);
        }
        this.setState({pedido: {}}); //setPedido para objeto vazio depois de enviar ao cliente
    };

    profile = () => {
        const { navigation } = this.props;
        const user = navigation.getParam('user', 'Erro');
        console.log("Dentro do perfil");
        console.log(user.user.idRestaurante);
        this.props.navigation.navigate('DadosRestaurante', { userId: user.user.idRestaurante });
    };

    productReg = () => {
        const { navigation } = this.props;
        const user = navigation.getParam('user', 'Erro');
        console.log("Dentro do perfil");
        console.log(user.user.idRestaurante);
        this.props.navigation.navigate('CadastrarProduto', { user: user });
    };

    loadProdutos = () => {
        const user = this.props.navigation.getParam('user', 'Erro2');
        fetch(apiUrl + "list/" + user.user.idRestaurante, {
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({ produtosInfo: jsonData.produtos })
            console.log(this.state.produtosInfo)
        }).done();
    };

    async componentWillMount() {
        this.loadProdutos();
    }

    componentDidMount() {
        const navigation = this.props.navigation.setParams({ profile: this.profile })
    }

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

        let dataDisplay = data.map((responseJson) => {
            return (
                <View key={responseJson.idProduto}>
                    <View style={styles.dividerProduto}></View>
                    <TouchableOpacity style={styles.cardProduto} onPress={() => this.props.navigation.navigate('DadosProduto', { userId: responseJson.idProduto })}>
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

                </View>
            )
        });

        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableHighlight style={styles.btnLogin} onPress={this.productReg}>
                        <Text style={styles.textStyle}>Cadastrar Produto</Text>
                    </TouchableHighlight>
                </View>
                <Card title="Produtos">
                    {dataDisplay}
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
                                <Text>Atualizando Pedidos...</Text>
                                {this.state.pedido.hasOwnProperty('idCliente') ? msgOK : msgFail}
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
                <Card title="Novos Pedidos" containerStyle={{ backgroundColor: '#1cba0b' }}>
                    {
                        pedidos.map((u, i) => {
                            return (
                                <ScrollView>
                                    <ListItem
                                        leftAvatar={{
                                            title: u.nomeCliente,
                                            source: { uri: u.imagemPedido },
                                        }}
                                        linearGradientProps={{ colors: ['#16e246', '#206831'] }}
                                        title={u.nomeCliente}
                                        subtitle={u.nomePrato}
                                        chevron
                                    />
                                    <View style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }} />
                                </ScrollView>
                            )
                        })
                    }
                </Card>
                <Divider style={{ backgroundColor: 'orange' }} />
                <Card title="Pedidos sendo preparados" containerStyle={{ backgroundColor: '#f4e807' }}>
                    {
                        pedidos.map((u, i) => {
                            return (
                                <ScrollView>
                                    <ListItem
                                        leftAvatar={{
                                            title: u.nomeCliente,
                                            source: { uri: u.imagemPedido },
                                        }}
                                        linearGradientProps={{ colors: ['#f4e807', '#f2ea54'] }}
                                        title={u.nomeCliente}
                                        subtitle={u.nomePrato}
                                        chevron
                                    />
                                    <View style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }} />
                                </ScrollView>
                            )
                        })
                    }
                </Card>
                <Card title="Pedidos Aguardando Retirada" containerStyle={{ backgroundColor: '#e57f1b' }}>
                    {
                        pedidos.map((u, i) => {
                            return (
                                <ScrollView>
                                    <ListItem
                                        leftAvatar={{
                                            title: u.nomeCliente,
                                            source: { uri: u.imagemPedido },
                                        }}
                                        linearGradientProps={{ colors: ['#efcdac', '#d88434'] }}
                                        title={u.nomeCliente}
                                        subtitle={u.nomePrato}
                                        chevron
                                    />
                                    <View style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }} />
                                </ScrollView>
                            )
                        })
                    }
                </Card>
            </ScrollView>
        )
    }
}

export default PerfilRestaurante;
