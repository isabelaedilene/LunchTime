import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const apiUrl = "http://192.168.0.13:9090/restaurant/";

export default class DadosRestaurante extends Component {
    static navigationOptions = {
        title: "Dados do Restaurante"
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
        this.getRestauranteInfo(userId);
        console.log("Dentro do componente Dados");
        console.log("variavel user");
        console.log(userId);
        console.log("State");
        console.log(this.state);
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

        return(
            <ScrollView>
                {/*<Card
                    title={this.state.user.user.nomeRestaurante}
                    image={{ uri: 'https://1.kekantoimg.com/H-2ZscgOpGnwVlJe6WjrU9f9jiY=/fit-in/600x600/s3.amazonaws.com/kekanto_pics/pics/121/21121.jpg' }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        {this.state.user.user.cnpjRestaurante}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        {this.state.user.user.cidadeRestaurante}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        {this.state.user.user.telefoneRestaurante}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        {this.state.user.user.tipoRestaurante}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        {this.state.user.user.emailRestaurante}
                    </Text>
                    <Button
                        icon={<Icon name="delete_outline"/>}
                        backgroundColor="#f46242"
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title="Delete sua Conta"
                    />

                </Card>*/}
                <Text>
                    Teste
                </Text>
            </ScrollView>
        )
    }
}