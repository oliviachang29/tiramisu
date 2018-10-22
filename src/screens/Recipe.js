import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Share
} from 'react-native'
import Button from '../components/Shared/Button'
import GlobalStyles from '../GlobalStyles'
import Utils from '../Utils'
import realm from '../realm'
var moment = require('moment');

class Recipe extends Component {
  constructor (props) {
    super(props)

    if (this.props.prevScreen == "app.Discover") {
      this.props.recipe = this.props.recipe
    } else if (this.props.prevScreen == 'app.Saved') {
      this.props.recipe = realm.objects('Recipe').filtered('id = $0', this.props.recipe_id)[0]
      this.date = moment(this.props.recipe.dateCreated).format('MM/DD/YYYY');
    }
  }

  determinePopularity(social_rank) {
    if (social_rank) {
      var comment = "Popularity: "
      if (social_rank <= 30) {
        comment += "Low"
      } else if (social_rank <= 60) {
        comment += "Medium"
      } else if (social_rank <= 90) {
        comment += "High"
      } else if (social_rank <= 100) {
        comment += "Very high"
      }
      return comment
    }
  }

  render () {
    return (
      <View style={[GlobalStyles.shadow, styles.container]}>
        <Image
          style={styles.image}
          source={{uri: this.props.recipe.image_url}}
        />
        <View style={GlobalStyles.innerContainer}>
          <Text style={[GlobalStyles.h1, styles.title]}>{this.props.recipe.title}</Text>
          {!this.date ? null : 
            <Text style={[GlobalStyles.p, styles.p]}>You saved this recipe on {this.date}.</Text>
          }
          <Text style={[GlobalStyles.p, styles.p]}>{this.determinePopularity(this.props.recipe.social_rank)}</Text>
        </View>
          {/*<Button
            text="Open Recipe"
            viewStyle={styles.openSourceURLButton}
            onPress={() => this.openSourceURL(this.props.recipe.source_url)}
          />*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'gray'
    paddingBottom: 40
  },
 image: {
    height: 250,
    width: '100%'
  },
  openSourceURLButton: {
    marginTop: 30,
    justifyContent: "flex-end",
  },
  title: {
    marginBottom: 10, 
  },
  p: {
    marginTop: 10,
  },
  share: {
    height: 35,
    width: 50
  }
})

module.exports = Recipe
