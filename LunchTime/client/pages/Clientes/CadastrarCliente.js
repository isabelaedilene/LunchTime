import React from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../../style';
import {Font} from 'expo';

const apiUrl = "http://localhost:9090/client/";

export default class Cliente extends React.Component {

    static navigationOptions = {
      title: 'Cadastre-se',
    };

    constructor(props){
      super(props)
      this.state = {
        apiData: [],
        rawData: [],
        fontLoaded:false,
      }, 
      this.idCliente = null;
      this.nomeCliente = null;
      this.emailCliente = null;
      this.senhaCliente = null;
      this.telefoneCliente = null;
    }   

  async componentWillMount(){
      await Font.loadAsync({
          'Acme-Regular': require('../../../assets/fonts/Acme-Regular.ttf'),
      });
      this.setState({fontLoaded: true})
  }

  
    getButton = () => {
      fetch('',{
        method: 'GET'
      }).then((responseData) => {
        return responseData.json();
      }).then((jsonData) => {
        console.log(jsonData);
        this.setState({apiData: jsonData})
        console.log(this.state.apiData)
      }).done();
      this.idCliente = null;
      this.nomeCliente = null;
      this.emailCliente = null;
      this.senhaCliente = null;
      this.telefoneCliente = null;
    }
  
    saveButton = () => {
      fetch(apiUrl,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({nomeCliente: this.nomeCliente, emailCliente: this.emailCliente, senhaCliente: this.senhaCliente, telefoneCliente: this.telefoneCliente})
      }).then((responseData) => {
        return responseData.json();
      }).then((jsonData) => {
        //console.log(jsonData);
        this.setState({rawData: jsonData})
        console.log(this.state.rawData)
      }).done();
      this.idCliente = null;
      this.nomeCliente = null;
      this.emailCliente = null;
      this.senhaCliente = null;
      this.telefoneCliente = null;
    }
  
    searchButton = () =>{
      fetch(''+(this.idCliente),{
        method: 'GET'
      }).then((responseData) => {
        return responseData.json();
      }).then((jsonData) => {
        console.log(jsonData);
        this.setState({apiData: jsonData})
        console.log(this.state.apiData)
      }).done();
      this.idCliente = null;
      this.nomeCliente = null;
      this.emailCliente = null;
      this.senhaCliente = null;
      this.telefoneCliente = null;
    }
  
    deleteButton = () =>{
      fetch(''+(this.idCliente),{
        method: 'DELETE'
      }).then((responseData) => {
        console.log(responseData.rows);
      }).done();
      this.idCliente = null;
      this.nomeCliente = null;
      this.emailCliente = null;
      this.senhaCliente = null;
      this.telefoneCliente = null;
    }
  
    updateButton = () => {
      fetch('',{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({idCliente: this.idCliente ,nomeCliente: this.nomeCliente, emailCliente: this.emailCliente, senhaCliente: this.senhaCliente, telefoneCliente: this.telefoneCliente})
      }).then((responseData) => {
        return responseData.json();
      }).done();
      this.idCliente = null;
      this.nomeCliente = null;
      this.emailCliente = null;
      this.senhaCliente = null;
      this.telefoneCliente = null;
    }
  
    render() {
      const data = this.state.apiData;
      let dataDisplay = data.map(function(jsonData){
          return (
            <View key={jsonData.idCliente}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color: '#511099'}}>{jsonData.idCliente} | </Text>
                <Text style={{color: '#FF5722'}}>{jsonData.nomeCliente} | </Text>
                <Text style={{color: '#511099'}}>{jsonData.emailCliente} | </Text>
                <Text style={{color: '#FF5722'}}>{jsonData.senhaCliente} | </Text>
                <Text style={{color: '#511099'}}>{jsonData.telefoneCliente} | </Text>
              </View>
            </View>
          ) 
      });
      return (
        <View style={styles.container}>
        
          {this.state.fontLoaded?(
              <Text style={styles.textLoginClient}>LunchTime</Text>
          ):(
              <ActivityIndicator size="large"/>
          )}
  
          <TextInput style={styles.input}
            placeholder = 'Nome e Sobrenome'
            onChangeText = {(text) => {this.nomeCliente = text}}
            value = {this.nomeCliente}
            underlineColorAndroid = 'transparent'
          />
          <TextInput style={styles.input}
            placeholder = 'E-mail'
            onChangeText = {(text) => {this.emailCliente = text}}
            value = {this.emailCliente}
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
          <TextInput style={styles.input}
            placeholder = 'Telefone'
            onChangeText = {(text) => {this.telefoneCliente = text}}
            value = {this.telefoneCliente}
            underlineColorAndroid = 'transparent'
          />
          <TouchableHighlight 
              style={styles.btnLogin} 
              onPress = {this.saveButton}
          >
              {this.state.fontLoaded?(
                  <Text style={styles.textEntry}> Cadastrar </Text>
              ):(
                  <ActivityIndicator size="large"/>
              )}
          </TouchableHighlight>

          <ScrollView contentContainerStyle={styles.container}>
            {dataDisplay}
          </ScrollView>
        </View>
      );
    }
  }