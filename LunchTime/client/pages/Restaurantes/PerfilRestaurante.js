import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Card, ListItem, Divider, Icon } from 'react-native-elements';

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

    static navigationOptions = ({navigation}) => {
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
        this.state={
            user: ""
        }
    }

    profile = () => {
        const { navigation } = this.props;
        const user = navigation.getParam('user', 'Erro');
        console.log("Dentro do perfil");
        console.log(user.user.idRestaurante);
        this.props.navigation.navigate('DadosRestaurante', { userId: user.user.idRestaurante });
    };

    componentDidMount() {
        const navigation = this.props.navigation.setParams({ profile: this.profile })
    }

    render() {
        return(
            <ScrollView>
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
                                        linearGradientProps={{colors: ['#16e246', '#206831']}}
                                        title={u.nomeCliente}
                                        subtitle={u.nomePrato}
                                        chevron
                                    />
                                    <View style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}/>
                                </ScrollView>
                            )
                        })
                    }
                </Card>
                <Divider style={{ backgroundColor: 'orange' }}/>
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
                                        linearGradientProps={{colors: ['#f4e807', '#f2ea54']}}
                                        title={u.nomeCliente}
                                        subtitle={u.nomePrato}
                                        chevron
                                    />
                                    <View style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}/>
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
                                        linearGradientProps={{colors: ['#efcdac', '#d88434']}}
                                        title={u.nomeCliente}
                                        subtitle={u.nomePrato}
                                        chevron
                                    />
                                    <View style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}/>
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
