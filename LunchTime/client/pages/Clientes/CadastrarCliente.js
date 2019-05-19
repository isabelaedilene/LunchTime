import React from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../../style';
import { Font } from 'expo';

const apiUrl = "http://192.168.1.23:9090/client/";

export default class Cliente extends React.Component {

  static navigationOptions = {
    title: 'Cadastre-se',
  };

  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
      rawData: [],
      fontLoaded: false,
      idCliente: '',
      nomeCliente: '',
      emailCliente: '',
      senhaCliente: '',
      telefoneCliente: '',
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Acme-Regular': require('../../../assets/fonts/Acme-Regular.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  saveButton = () => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nomeCliente: this.state.nomeCliente,
        emailCliente: this.state.emailCliente,
        senhaCliente: this.state.senhaCliente,
        telefoneCliente: this.state.telefoneCliente
      })
    }).then((responseData) => {
      return responseData.json();
    }).then((jsonData) => {
      this.setState({ rawData: jsonData });
      console.log(this.state.rawData)
    }).then((resolve) => {
      this.props.navigation.navigate('LoginCliente');
    });
  };

  render() {
    const data = this.state.apiData;
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.fontLoaded ?
            (<Text style={styles.textLoginClient}>LunchTime</Text>) : (<ActivityIndicator size="large" />)
          }

          <TextInput style={styles.input}
            placeholder='Nome e Sobrenome'
            onChangeText={(text) => this.setState({ nomeCliente: text })}
            value={this.nomeCliente}
            underlineColorAndroid='transparent'
          />
          <TextInput style={styles.input}
            placeholder='E-mail'
            onChangeText={(text) => this.setState({ emailCliente: text })}
            value={this.emailCliente}
            underlineColorAndroid='transparent'
          />
          <TextInput style={styles.input}
            placeholder='Senha'
            onChangeText={(text) => this.setState({ senhaCliente: text })}
            value={this.senhaCliente}
            password={true}
            secureTextEntry={true}
            underlineColorAndroid='transparent'
          />
          <TextInput style={styles.input}
            placeholder='Telefone'
            onChangeText={(text) => this.setState({ telefoneCliente: text })}
            value={this.telefoneCliente}
            underlineColorAndroid='transparent'
          />
          <TouchableHighlight
            style={styles.btnLogin}
            onPress={this.saveButton}
          >
            {this.state.fontLoaded ? 
              (<Text style={styles.textEntry}> Cadastrar </Text>) : (<ActivityIndicator size="large" />)
            }
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}