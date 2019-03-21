import React from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { styles } from '../../style';

const apiUrl = "http://localhost:9090/client/";

export default class Cliente extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        apiData: [],
        rawData: []
      }
      this.idCliente = null;
      this.nomeCliente = null;
      this.emailCliente = null;
      this.senhaCliente = null;
      this.telefoneCliente = null;
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
          <Text>LunchTime</Text>
          <View style={styles.divider}></View>
  
          <TextInput style={styles.input}
            placeholder = 'nomeCliente'
            onChangeText = {(text) => {this.nomeCliente = text}}
            value = {this.nomeCliente}
            underlineColorAndroid = 'transparent'
          />
          <TextInput style={styles.input}
            placeholder = 'emailCliente'
            onChangeText = {(text) => {this.emailCliente = text}}
            value = {this.emailCliente}
            underlineColorAndroid = 'transparent'
          />
          <TextInput style={styles.input}
            placeholder = 'senhaCliente'
            onChangeText = {(text) => {this.senhaCliente = text}}
            value = {this.senhaCliente}
            underlineColorAndroid = 'transparent'
          />
          <TextInput style={styles.input}
            placeholder = 'Telefone'
            onChangeText = {(text) => {this.telefoneCliente = text}}
            value = {this.telefoneCliente}
            underlineColorAndroid = 'transparent'
          />
          <TouchableHighlight style={styles.button} onPress = {this.saveButton}>
            <Text style={styles.textStyle}>Registar</Text>
          </TouchableHighlight>
          <Text>Pesquisar</Text>
          <View style={styles.divider}></View>
          <TextInput style={styles.input}
            placeholder = 'Código'
            onChangeText = {(text) => {this.idCliente = text}}
            value = {this.idCliente}
            underlineColorAndroid = 'transparent'
          />
          <TouchableHighlight style={styles.button} onPress = {this.searchButton}>
            <Text style={styles.textStyle}>Pesquisar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress = {this.getButton}>
            <Text style={styles.textStyle}>Ver Usuários</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress = {this.deleteButton}>
            <Text style={styles.textStyle}>Deletar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress = {this.updateButton}>
            <Text style={styles.textStyle}>Atualizar</Text>
          </TouchableHighlight>
  
          <ScrollView contentContainerStyle={styles.container}>
            {dataDisplay}
          </ScrollView>
        </View>
      );
    }
  }