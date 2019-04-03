import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { styles } from '../../style';

const apiUrl = "http://localhost:9090/restaurant/search/";

export default class CadastrarRestaurante extends Component {

  constructor(props){
    super(props)
    this.state = {
      apiData: []
       this.nomeRestaurante = null;
    this.tipoRestaurante = null;
  }

 static navigationOptions = {
        title: "Pesquisar"
  };

   searchButton = () =>{
      fetch(apiUrl+(this.nomeRestaurante+'/'+this.tipoRestaurante),{
        method: 'GET'
      }).then((responseData) => {
        return responseData.json();
      }).then((jsonData) => {
        console.log(jsonData);
        this.setState({apiData: jsonData})
        console.log(this.state.apiData)
      }).done();
      this.nomeRestaurante = null;
      this.tipoRestaurante = null;
  }


  render() {
      const data = this.state.apiData;
      let dataDisplay = data.map(function(jsonData){
        return (
          <View key={jsonData.idRestaurante}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color: '#511099'}}>{jsonData.idRestaurante} | </Text>
              <Text style={{color: '#FF5722'}}>{jsonData.nomeRestaurante} | </Text>
              <Text style={{color: '#511099'}}>{jsonData.tipoRestaurante} | </Text>
            </View>
          </View>
        ) 
      });      
      return (
        <View style={styles.container}>
          <Text>Pesquisar</Text>
          <View style={styles.divider}></View>
          <Text>Nome do Restaurante</Text>
          <TextInput style={styles.input}
            placeholder = 'Nome'
            //onChangeText = {}
            //value = {}
            underlineColorAndroid = 'transparent'
          />
          <Text>Tipo do Restaurante</Text>
          <TextInput style={styles.input}
            placeholder = 'Tipo'
            //onChangeText = {}
            //value = {}
            underlineColorAndroid = 'transparent'
          />
          <TouchableHighlight style={styles.button} onPress = {this.searchButton}>
          <Text style={styles.textStyle}>Pesquisar</Text>
          </TouchableHighlight>
          <ScrollView contentContainerStyle={styles.container}>
            {dataDisplay}
          </ScrollView>
        </View>
      )
    }
} 