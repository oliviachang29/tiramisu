import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  slideBottom: {
    backgroundColor: '#ff7473',
  },
  bigText: {
    //font
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'Circular Medium',
  },
  smallText: {
    //font
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Circular Book'
  }
})

export default class Onboarding extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide}>
          <Image source={require('./birthday_cake.svg')}/>
        </View>
        <View style={styles.slide}>
          <Text style={styles.bigText}>Tiramisu</Text>
          <Text style={styles.smallText}>Browse thousands</Text>
          <Text style={styles.smallText}>of recipes</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('./tasting.svg')}/>
        </View>
        <View style={styles.slide}>
          <Text style={styles.bigText}>Tiramisu</Text>
          <Text style={styles.smallText}>Save recipes</Text>
          <Text style={styles.smallText}>for later</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('./super_thank_you.svg')}/>
        </View>
        <View style={styles.slide}>
          <Text style={styles.bigText}>Tiramisu</Text>
          <Text style={styles.smallText}>Share with</Text>
          <Text style={styles.smallText}>friends</Text>
        </View>
      </Swiper>
    );
  }
}
