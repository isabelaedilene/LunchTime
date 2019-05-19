import React from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../../style';
import {Font} from 'expo';

const apiUrl = "http://192.168.1.23:9090/client/";

export default class Cliente extends React.Component {

    static navigationOptions = {
      title: 'Login',
    };

    constructor(){
      super()
      this.state={
          fontLoaded:false,
          emailCliente: "",
          senhaCliente: "",
          token: "",
          user: ""
      }        
  }

  login = () => {
    fetch(apiUrl+'login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailCliente: this.state.emailCliente,
          senhaCliente: this.state.senhaCliente
        })
    }).then((responseData) => {
        return responseData.json();
    }).then((jsonData) => {
        this.setState({
            token: jsonData.token,
            user: jsonData.user
        });
        console.log("Dados salvos no componente");
        console.log(this.state)
    }).then((resolve) => {
        if (this.state.user) {
            this.props.navigation.navigate('HomeCliente', {user: this.state});
        } else {
            this.props.navigation.navigate('Main');
        }
    });
};

  async componentWillMount(){
      await Font.loadAsync({
          'Acme-Regular': require('../../../assets/fonts/Acme-Regular.ttf'),
      });
      this.setState({fontLoaded: true})
  }
  
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    console.warn("Email is Not Correct");
    this.setState({email:text})
    return false;
      } 
    else {
      this.setState({email:text})
      console.warn("Email is Correct");
    }
  }

    render() {
      return (
        <View style={styles.container}>
          {this.state.fontLoaded?(
              <Text style={styles.textLoginClient}>LunchTime</Text>
          ):(
              <ActivityIndicator size="large"/>
          )}

          <TextInput style={styles.input}
            placeholder = 'E-mail'
            onChangeText={(text) => this.setState({ emailCliente: text})}
            value={this.state.email}
            underlineColorAndroid = 'transparent' 
          />
          <TextInput style={styles.input}
            placeholder = 'Senha'
            onChangeText = {(text) => this.setState({ senhaCliente: text})}
            value = {this.senhaCliente}
            password={true}
            secureTextEntry={true}
            underlineColorAndroid = 'transparent'
          />
 
            <TouchableHighlight 
                style={styles.btnLogin} 
                onPress={this.login}
            >
                {this.state.fontLoaded?(
                    <Text style={styles.textEntry}> Login</Text>
                ):(
                    <ActivityIndicator size="large"/>
                )}
            </TouchableHighlight>

            {this.state.fontLoaded?(
              <Text style={styles.textEsqueciSenha}> Esqueci a Senha</Text>
          ):(
              <ActivityIndicator size="large"/>
          )}

            <View style={styles.dividerDist}></View>
  
            {this.state.fontLoaded?(
              <Text style={styles.textNaoConta}> Ainda não tem uma conta? </Text>
          ):(
              <ActivityIndicator size="large"/>
          )}

            <TouchableHighlight 
                style={styles.btnCad} 
                onPress={() => this.props.navigation.navigate('CadastrarCliente')}
            >
                {this.state.fontLoaded?(
                    <Text style={styles.textCad}> Quero me Cadastrar! </Text>
                ):(
                    <ActivityIndicator size="large"/>
                )}
            </TouchableHighlight>

        </View>
      );
    }
  }