import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import GlobalStyles from '../../GlobalStyles'
import Swipeout from 'react-native-swipeout'
import realm from '../../realm'

class ListViewItem extends Component {

  openRecipe() {
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
  }

  render () {
    var swipeoutBtns = [
      {
        backgroundColor: 'transparent',
        component: 
          <View style={[styles.buttonContainer, styles.deleteContainer]}>
            <Text style={[GlobalStyles.p, styles.swipeoutText]}>Remove recipe</Text>
          </View>
        ,
        onPress: () => this.deleteRecipe(this.props.item.id)
      }
    ]
    return (
      <Swipeout right={swipeoutBtns} backgroundColor='transparent' style={styles.swipeout} buttonWidth={108}>
        <View style={GlobalStyles.shadow}>
        <TouchableOpacity
          style={[styles.container]}
          onPress={() => this.openRecipe()}>
          <Image
            style={styles.image}
            source={{uri: this.props.item.image_url}}
          />
          <View style={styles.textContainer}>
            <Text style={[GlobalStyles.h4, styles.text]}>{this.props.item.title}</Text>
          </View>
        </TouchableOpacity>
        </View>
      </Swipeout>
    )
  }
}

const borderRadius = 8

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: borderRadius,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 15,
    paddingRight: 30,
    marginLeft: 26,
    marginRight: 26
  },
  image: {
    width: '30%',
    minHeight: 100,
    height: '100%',
    marginRight: 15
  },
  textContainer: {
    flexDirection: 'column',
    width: '70%',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: "#454545",
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 15,
    justifyContent: 'center',
    width: 100,
    padding: 15,
    borderRadius: borderRadius,
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