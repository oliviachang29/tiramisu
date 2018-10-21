import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import GlobalStyles from '../GlobalStyles'
import Swiper from 'react-native-swiper';
import Button from '../components/Shared/Button'

var slideContent = [
  {
    imageURL: require('../assets/images/birthday_cake.png'),
    smallText: 'Browse thousands of recipes',
  },
  {
    imageURL: require('../assets/images/super_thank_you.png'),
    smallText: 'Save recipes for later',
  },
  {
    imageURL: require('../assets/images/tasting.png'),
    smallText: 'Share with friends',
    showButton: true
  }
]

export default class Onboarding extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  }

  gotoDiscover() {
    this.props.navigator.dismissModal()
  }

  render(){
    var slides = [];

    for(let i = 0; i < slideContent.length; i++){
      slides.push(
       <View style={styles.slide} key={i}>
          <Image style={[GlobalStyles.image, styles.image]} source={slideContent[i]["imageURL"]}/>
          <View style={styles.lowerSlide}>
            {/*<Text style={styles.bigText}>Tiramisu</Text>*/}
            <Text style={[GlobalStyles.h1, styles.smallText]}>{slideContent[i]["smallText"]}</Text>
            {!slideContent[i]["showButton"] ? null :
              <Button
                text="Get Started"
                textStyle={styles.buttonText}
                viewStyle={styles.button}
                onPress={() => this.gotoDiscover()}
                />
            }
          </View>
        </View>
      )
    }

    return (
      <Swiper
        //index={0}
        loop={false}
        style={styles.wrapper}
        showsButtons={false}
        activeDotColor="#FF7473"
        paginationStyle={{position:'absolute', bottom: 200}}>
        {slides}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  slideBottom: {
    backgroundColor: '#FF7473',
  },
  lowerSlide: {
    paddingTop: 30,
    backgroundColor: "#FF7473",
    height: 200 - 20, // corresponds w position of dot
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  bigText: {
    //font
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
    // fontFamily: 'Circular Medium',
  },
  smallText: {
    //font
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50
    // fontFamily: 'Circular Book'
  },
  image: {
    marginBottom: '50%'
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white'
  },
  buttonText: {
    color: '#FF7473',
  }
})