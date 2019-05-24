import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Card, ListItem, Divider, Icon } from 'react-native-elements';
import { styles } from '../../style';
import { Font } from 'expo';
import serverUrl from '../../../connection';

const apiUrl = serverUrl.SERVER_URL+"/restaurant/search/";

export default class PesquisarRestaurante extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restauranteInfo: [],
      nomeRestaurante: '',
      tipoRestaurante: '',
      fontLoaded: false,
      user: "",
    }
  };

  static navigationOptions = {
    title: "Pesquisar"
  };

  searchButton = () => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nomeRestaurante: this.state.nomeRestaurante,
        tipoRestaurante: this.state.tipoRestaurante
      })
    }).then((responseData) => {
      return responseData.json();
    }).then((jsonData) => {
      console.log(jsonData);
      this.setState({ restauranteInfo: jsonData })
      console.log(this.state.restauranteInfo)
    }).done();
  }


  render() {
    const data = this.state.restauranteInfo;
    let dataDisplay = data.map(function (responseJson) {
      return (
        <View key={responseJson.idRestaurante}>

          <TouchableOpacity style={styles.card}>
            <View>
              <Image style={styles.imgCard} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoeEY-M_PJBZ8rkUS8nfRo-HwkDys9iJkWG3xcdQfIyVRf0c1' }} />
            </View>
            <View>
              <Text style={styles.nameRest}> {responseJson.nomeRestaurante} </Text>
              <Text style={styles.catRest}> {responseJson.tipoRestaurante} </Text>
            </View>
          </TouchableOpacity>

        </View>
      )
    });
    return (
      <View style={styles.container}>
        <View style={styles.divider}></View>
        <Text>Nome do Restaurante</Text>
        <TextInput style={styles.input}
          placeholder='Nome'
          onChangeText={(text) => this.setState({ nomeRestaurante: text })}
          value={this.nomeRestaurante}
          underlineColorAndroid='transparent'
        />
        <Text>Tipo do Restaurante</Text>
        <TextInput style={styles.input}
          placeholder='Tipo'
          onChangeText={(text) => this.setState({ tipoRestaurante: text })}
          value={this.tipoRestaurante}
          underlineColorAndroid='transparent'
        />
        <TouchableHighlight style={styles.btnCad} onPress={this.searchButton}>
          <Text style={styles.textStyle}>Pesquisar</Text>
        </TouchableHighlight>
        <View style={styles.divider}></View>
        <ScrollView contentContainerStyle={styles.container}>
          {dataDisplay}
        </ScrollView>
      </View>
    );
  }
} 