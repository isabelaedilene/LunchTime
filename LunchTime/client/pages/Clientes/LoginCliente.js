import React from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../../style';
import {Font} from 'expo';

const apiUrl = "http://localhost:9090/client/";

export default class Cliente extends React.Component {

    static navigationOptions = {
      title: 'LunchTime',
    };

    constructor(){
      super()
      this.state={
          fontLoaded:false
      }        
  }

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
            onChangeText={(text) => this.validate(text)}
            value={this.state.email}
            underlineColorAndroid = 'transparent' 
          />
          <TextInput style={styles.input}
            placeholder = 'Senha'
            onChangeText = {(text) => {this.senhaCliente = text}}
            value = {this.senhaCliente}
            password={true}
            secureTextEntry={true}
            underlineColorAndroid = 'transparent'
          />
 
            <TouchableHighlight 
                style={styles.btnLogin} 
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
                style={styles.btnLogin} 
                onPress={() => this.props.navigation.navigate('CadastrarCliente')}
            >
                {this.state.fontLoaded?(
                    <Text style={styles.textEntry}> Quero me Cadastrar! </Text>
                ):(
                    <ActivityIndicator size="large"/>
                )}
            </TouchableHighlight>

        </View>
      );
    }
  }