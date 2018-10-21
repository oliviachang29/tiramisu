import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image
} from 'react-native'
import GlobalStyles from '../GlobalStyles'
import Utils from '../Utils'
import realm from '../realm'

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
    
    var recipe
    if (this.props.prevScreen == "app.Discover") {
      recipe = this.props.recipe
    } else if (this.props.prevScreen == 'app.Saved') {
      recipe = realm.objects('Recipe').filtered('id = $0', this.props.recipe_id)[0]
    }
 
    this.state = {
      recipe: recipe
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  render () {
    return (
      <View style={GlobalStyles.container}>
        <Image
          style={styles.image}
          source={{uri: this.state.recipe.image_url}}
        />
        <View style={GlobalStyles.innerContainer}>
          <Text>{this.state.recipe.title}</Text>
          <Text>{this.state.recipe.ingredients}</Text>
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
  image: {
    height: 300,
    width: '100%'
  }
})

module.exports = ShowRecipe