import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import GlobalStyles from '../GlobalStyles'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class Card extends Component {
  constructor(props) {
    super(props)
    image_url = this.props.card.image_url.replace("http", "https")
    this.state = {
      image_url: image_url
    }
  }
  render () {

    return (
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{uri: this.state.image_url}}
          blurRadius={this.props.card.blurRadius}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  card: {
    height: deviceHeight - 200,
    width: deviceWidth - 36,
    borderRadius: 4,
    justifyContent: "center",
  },
  cardImage: {
    flex: 1
  }
})

module.exports = Card
