import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import Button from '../Shared/Button'
import GlobalStyles from '../../GlobalStyles'

class EmptyState extends Component {
  render () {
    if (this.props.shouldRender) {
      return (
        <View>
          <View style={styles.emptyStateContainer}>
            <Image source={require('../../assets/images/empty-state.png')} style={styles.image} />
            <View style={styles.topView}>
              <Text allowFontScaling={false} style={[GlobalStyles.title, styles.topTitle]}>You haven't saved any recipes. 😢</Text>
              <Text allowFontScaling={false} style={[GlobalStyles.span, styles.topText]}>Return back here once you save a recipe.</Text>
            </View>
          </View>
        </View>
      )
    } else {
      return (<View />)
    }
  }

  openMusicDialog () {
    this.props.navigator.showModal({
      screen: 'app.MusicDialog',
      title: 'New Program'
    })
  }
}

const styles = StyleSheet.create({
  emptyStateContainer: {
  },
  image: {
    height: 279,
    width: 300,
  },
  topView: {
    alignItems: 'center'
  },
  topText: {
    marginTop: 10
  },
  newProgramButtonView: {
    alignSelf: 'center',
    marginTop: 50
  },
  newProgramButton: {
    borderBottomWidth: 2,
    paddingBottom: 6
  },
  newProgramText: {
    alignSelf: 'center'
  }
})

module.exports = EmptyState
