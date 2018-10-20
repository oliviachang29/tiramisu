import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import GlobalStyles from '../GlobalStyles'

class ListViewItem extends Component {

  openRecipe(title) {
    this.props.navigator.showModal({
      screen: 'app.ShowRecipe',
      title: title,
      passProps: {
        recipe: this.props.item
      }
    })
  }

  render () {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.openRecipe(this.props.item.title)}
        onLongPress={this.props.onLongPress}>
        <Text style={styles.text}>{this.props.item.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 22,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
})


module.exports = ListViewItem