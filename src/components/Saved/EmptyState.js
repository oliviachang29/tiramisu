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
            <Image source={require('../../assets/images/empty-state.png')} style={GlobalStyles.image} />
            <View style={styles.topView}>
              <Text allowFontScaling={false} style={[GlobalStyles.h1, styles.topTitle]}>You haven't saved any recipes.</Text>
              <Text allowFontScaling={false} style={[GlobalStyles.p, styles.topText]}>Return back here once you save a recipe.</Text>
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
    paddingTop: 50
  },
  topView: {
    alignItems: 'center'
  },
  topTitle: {
    marginTop: 30,
    // fontSize: 25,
    textAlign: 'center',
  },
  topText: {
    marginTop: 20,
    textAlign: 'center',
    width: '70%'
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
