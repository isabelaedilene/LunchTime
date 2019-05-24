import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import serverUrl from '../../../connection';

const apiUrl = serverUrl.SERVER_URL+"/client/";

export default class DadosRestaurante extends Component {
    static navigationOptions = {
        title: "Dados do Cliente"
    };

    constructor(props) {
        super(props);
        this.state={
            user: {}
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 'Erro2');
        this.getClienteInfo(userId);
        console.log(userId);
        console.log("State");
        console.log(this.state);
    }

    getClienteInfo = async (id) => {
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

        return(
            <ScrollView>
                <Card
                    title={this.state.user.nomeRestaurante}
                    //image={{ uri: '' }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        Nome: {this.state.user.nomeCliente}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        E-mail: {this.state.user.emailCliente}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Telefone: {this.state.user.telefoneCliente}
                    </Text>
                    <Button
                        buttonStyle={{backgroundColor: 'red'}}
                        icon={<Icon name="warning"/>}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title="Delete sua Conta"
                    />
                </Card>
            </ScrollView>
        )
    }
}