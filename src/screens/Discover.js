import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Keyboard, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native'
import GlobalStyles from '../GlobalStyles'
import Utils from '../Utils'
import realm from '../realm'
import Swiper from 'react-native-deck-swiper'
import FastImage from 'react-native-fast-image'
import Card from '../components/Discover/Card'
import store from 'react-native-simple-store'
import Button from '../components/Shared/Button'
import Recipe from './Recipe'

import FIXED_RESPONSE from '../FIXED_RESPONSE'

export default class Discover extends Component {
  static navigatorStyle = Utils.navigatorStyle()
  constructor(props) {
    super(props)

    this.props.navigator.setStyle({
      navBarTextFontFamily: 'Circular-Medium',
    });

    console.log(realm.path)
    this.state = {
      isLoaded: false,
      cardIndex: 0,
      pageNumber: 1
    }
  }

  componentDidMount() {
     store.get('user')
      .then(result => {
        if (result.dateJoined) {
         console.log('user has already been set up')
         this.setState({pageNumber: result.pageNumber})
         this.fetchResults()
        } else {
          console.log('user has not been set up')
          this.setUpUser()
        }
      })
      .catch(error => {
        console.log(error)
         this.setUpUser()
      })
  }

  fetchResults(pageNumber) {
    var search_term = "dessert"
    var api_key = "ed158562560977b2b0898b2f0e1a844a"
    var url = "https://www.food2fork.com/api/search?key=" + api_key + "&q=" + search_term + "&page=" + this.state.pageNumber
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      var cards = []

      responseJson.recipes.forEach(recipe => {
        cards.push({
          title: recipe.title,
          image_url: recipe.image_url.replace("http", "https"),
          source_url: recipe.source_url,
          social_rank: recipe.social_rank,
        })
      });

      this.setState({cards: cards, isLoaded: true})
    })
    .catch((err) => {
      console.log(err.message)
    })
  }


  setUpUser() {
    console.log('this is first time opening app. setting up')
    this.gotoOnboarding()
    store
      .update('user', {
        dateJoined: new Date(),
        pageNumber: 1,
      })
      .catch(error => {
        console.log(error)
      })
    this.setState({pageNumber: 1})
    this.fetchResults()
  }

  gotoOnboarding() {
    this.props.navigator.showModal({
        screen: 'app.Onboarding',
      })
  }

  saveCard(cardIndex) {
    var card = this.state.cards[cardIndex]
    realm.write(() => {
      realm.create('Recipe', {
        id: Utils.uuid(),
        dateCreated: new Date(),
        image_url: card.image_url,
        source_url: card.source_url,
        title: card.title,
        social_rank: card.social_rank,
      })
    })

    console.log('new recipe saved')
  }

  handleButtonPress(buttonName) {
    if(buttonName == "Yes"){
      // this.saveCard(cardIndex)
      this.swiper.swipeRight()
    }
    if(buttonName == "No") {
      this.swiper.swipeLeft()
    }
  }

  loadMore() {
    this.setState({pageNumber: this.state.pageNumber + 1, isLoaded: false})
    this.fetchResults()
    store
      .update('user', {
        pageNumber: this.state.pageNumber,
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    return (
      <View style={[GlobalStyles.container, styles.container]}>
        {!this.state.isLoaded ? 
          <ActivityIndicator style={styles.loader} size="large" color="black" />
         :
          <Swiper
              ref={swiper => {
                this.swiper = swiper;
              }}
              cards={this.state.cards}
              renderCard={(card) => {
                return (
                  <Recipe recipe={card} navigator={navigator} />
                )
              }}
              style={styles.swiper}
              backgroundColor="#F5F5F5"
              onSwipedRight={(cardIndex) => {this.saveCard(cardIndex)}}
              onSwipedAll={() => this.loadMore()}
              cardIndex={this.state.cardIndex}
              stackSize={2}
              disableTopSwipe={true}
              disableBottomSwipe={true}
              stackSeparation={0}
              stackScale={10}
              >
          </Swiper>
        }
        {!this.state.isLoaded ? null :
        <View style={styles.buttonsView}>
            <Button
              text="No"
              textStyle={styles.buttonText}
              viewStyle={[styles.button, styles.buttonLeft]}
              onPress={() => this.handleButtonPress("No")}
              />
            <Button
              text="Yes"
              textStyle={styles.buttonText}
              viewStyle={[styles.button, styles.buttonRight]}
              onPress={() => this.handleButtonPress("Yes")}
              />
          </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -20
  },
  loader: {
    top: '50%'
  },
  buttonsViewContainer: {
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonLeft: {
    marginLeft: 50
  },
  buttonRight: {
    marginRight: 50
  },
})

module.exports = Discover