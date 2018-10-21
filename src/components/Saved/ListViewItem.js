import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import GlobalStyles from '../../GlobalStyles'
import Swipeout from 'react-native-swipeout'
import realm from '../../realm'

class ListViewItem extends Component {

  openRecipe(title) {
    this.props.navigator.push({
      screen: 'app.ShowRecipe',
      title: 'Recipe',
      passProps: {
        recipe_id: this.props.item.id,
        prevScreen: 'app.Saved'
      }
    })
  }

  deleteRecipe (id) {
    recipe = realm.objects('Recipe').filtered('id = $0', id)[0]
    realm.write(() => {
      realm.delete(recipe)
    })

    this.props.navigator.showInAppNotification({
        screen: 'app.Notification',
        passProps: {
          title: '✓ Your recipe was removed.',
          type: 'success'
        }
      })
  }

  render () {
    var swipeoutBtns = [
      {
        backgroundColor: 'transparent',
        component: 
          <View style={[styles.buttonContainer, styles.deleteContainer]}>
            <Text style={[GlobalStyles.text, styles.swipeoutText]}>Remove recipe</Text>
          </View>
        ,
        onPress: () => this.deleteRecipe(this.props.item.id)
      }
    ]
    return (
      <Swipeout right={swipeoutBtns} backgroundColor='transparent' style={styles.swipeout} buttonWidth={108}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.openRecipe(this.props.item.title)}>
          <Image
            style={styles.image}
            source={{uri: this.props.item.image_url}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.item.title}</Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 15
  },
  image: {
    width: '30%',
    height: 100,
    marginRight: 15
  },
  textContainer: {
    flexDirection: 'column',
    width: '70%',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 15,
    justifyContent: 'center',
    width: 100,
    padding: 15,
    borderRadius: 8,
    marginLeft: 8,
  },
  swipeoutText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  editContainer: {
    backgroundColor: '#ACABFF'
  },
  deleteContainer: {
    backgroundColor: '#FF7A72'
  },
})


module.exports = ListViewItem