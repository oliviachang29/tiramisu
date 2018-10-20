import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image
} from 'react-native'
import GlobalStyles from '../GlobalStyles'
import Utils from '../Utils'

export default class ShowRecipe extends Component {
  static navigatorStyle = Utils.navigatorStyle()
  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('../assets/images/x.png'),
        id: 'x',
        disableIconTint: true,
      }
    ]
  }

  constructor(props) {
    super(props)
    this.state = {
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  render () {
    var recipe = this.props.recipe
    return (
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.innerContainer}>

          <Text>{recipe.title}</Text>
          <Text>{recipe.desc}</Text>
          <Text>{recipe.content}</Text>
        </View>
      </View>
    )
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'x') {
        // pop back screen
        this.props.navigator.dismissModal()
      }
    }
  }
}

const styles = StyleSheet.create({
})

module.exports = ShowRecipe