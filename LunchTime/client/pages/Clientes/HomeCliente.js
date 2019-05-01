import React from 'react';
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../../style';
import {Font} from 'expo';


const apiUrl = "http://192.168.25.6:9090/client/";

export default class Cliente extends React.Component {

    static navigationOptions = {
      title: 'Página Inicial',
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

    render() {
      return (
        <View style={styles.container}>
         
            <TouchableOpacity style={styles.card}>
                <View>
                    <Image style={styles.imgCard} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoeEY-M_PJBZ8rkUS8nfRo-HwkDys9iJkWG3xcdQfIyVRf0c1' }}/>
                </View>
                <View>
                    {this.state.fontLoaded?(
                        <Text style={styles.nameRest}> Burger King </Text>
                        ):(
                        <ActivityIndicator size="large"/>
                    )}
                    {this.state.fontLoaded?(
                        <Text style={styles.catRest}> Fast Food </Text>
                        ):(
                        <ActivityIndicator size="large"/>
                    )}
                </View>
            </TouchableOpacity>

        </View>

        
      );
    }
  }

