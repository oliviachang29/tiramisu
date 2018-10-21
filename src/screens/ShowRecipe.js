import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  Share
} from 'react-native'
import GlobalStyles from '../GlobalStyles'
import Utils from '../Utils'
import realm from '../realm'
import Button from '../components/Shared/Button'
var moment = require('moment');

export default class ShowRecipe extends Component {
  static navigatorStyle = Utils.navigatorStyle()

  constructor(props) {
    super(props)
    
    if (this.props.prevScreen == "app.Discover") {
      this.recipe = this.props.recipe
    } else if (this.props.prevScreen == 'app.Saved') {
      this.recipe = realm.objects('Recipe').filtered('id = $0', this.props.recipe_id)[0]
      this.date = moment(this.recipe.dateCreated).format('MM/DD/YYYY');
    }

    this.props.navigator.setButtons({
      rightButtons: [
        {
        icon: require('../assets/images/share.png'),
        // title: 'Share',
        id: 'share',
        disableIconTint: true,
        buttonColor: 'white',
      }
      ],
    });

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  openSourceURL(url) {
    this.props.navigator.push({
      screen: 'app.ShowURL',
      title: "Recipe",
      passProps: {
        url: url,
      }
    })
  }

  determinePopularity(social_rank) {
    if (social_rank) {
      var comment = "This recipe is "
      if (social_rank <= 30) {
        comment += "not well known"
      } else if (social_rank <= 60) {
        comment += "relatively unknown"
      } else if (social_rank <= 90) {
        comment += "popular"
      } else if (social_rank <= 100) {
        comment += "very popular"
      }
      comment += "."
      return comment
    }
  }

  shareRecipe() {
    Share.share({
      url: this.recipe.source_url
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <View style={[GlobalStyles.container, styles.container]}>
        <Image
          style={styles.image}
          source={{uri: this.recipe.image_url}}
        />
        <View style={GlobalStyles.innerContainer}>
          <Text style={GlobalStyles.h1}>{this.recipe.title}</Text>
          {!this.date ? null : 
            <Text style={GlobalStyles.p}>You saved this recipe on {this.date}.</Text>
          }
          <Text style={GlobalStyles.p}>{this.determinePopularity(this.recipe.social_rank)}</Text>
          {/*<Text>{this.recipe.ingredients}</Text>*/}
        </View>
        <Button
          text="Open Recipe"
          viewStyle={styles.openSourceURLButton}
          onPress={() => this.openSourceURL(this.recipe.source_url)}
        />
      </View>
    )
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'share') {
        // pop back screen
        this.shareRecipe()
      }
    }
  }
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%'
  },
  innerContainer: {
    flexDirection: 'row',
    flex: 1
  },
  openSourceURLButton: {
    marginTop: 40,
    justifyContent: "flex-end"
  }
})

module.exports = ShowRecipe