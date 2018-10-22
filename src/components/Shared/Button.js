import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import GlobalStyles from '../../GlobalStyles'

class Button extends Component {
  render () {
    return (
      <TouchableOpacity
        style={[GlobalStyles.buttonContainer, GlobalStyles.shadow, styles.button,this.props.viewStyle]}
        onPress={this.props.onPress}
        onLongPress={this.props.onLongPress}>
        <Text style={[GlobalStyles.buttonStyleText, this.props.textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 3,
    shadowOpacity: 0.16,
  },
})


module.exports = Button
