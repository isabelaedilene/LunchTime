import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';

export default class App extends React.Component {
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
    fetch('http://127.0.0.1:9090/users',{
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
    fetch('http://127.0.0.1:9090/users',{
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
    fetch('http://127.0.0.1:9090/users/'+(this.idCliente),{
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
    fetch('http://127.0.0.1:9090/users/'+(this.idCliente),{
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
    fetch('http://127.0.0.1:9090/users',{
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: '#CCCCCC',
    marginBottom: 10,
    width: '90%',
  },
  input: {
    textAlign: 'center',
    height: 30,
    width: '90%',
    padding: 4,
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#48afdb',
    borderRadius: 5,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    width: '90%',
    backgroundColor: '#00BCD4',
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
