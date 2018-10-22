import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import GlobalStyles from '../../GlobalStyles'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class Card extends Component {
  render () {

    return (
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{uri: this.props.card.image_url}}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  card: {
    height: deviceHeight - 300,
    width: deviceWidth - 36,
  },
  cardImage: {
    flex: 1
  }
})

module.exports = Card
