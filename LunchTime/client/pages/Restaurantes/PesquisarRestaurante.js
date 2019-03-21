import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { styles } from '../../style';

export default class CadastrarRestaurante extends Component {
    static navigationOptions = {
        title: "Pesquisar"
    };

    render() {
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
          <TouchableHighlight style={styles.button} >
            <Text style={styles.textStyle}>Pesquisar</Text>
          </TouchableHighlight>
		  </View>
        )
    }
}