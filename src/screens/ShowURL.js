import React, { Component } from 'react'
import { WebView, Share } from 'react-native'

class ShowURL extends Component {
  constructor(props) {
    super(props)

    this.props.navigator.setButtons({
      rightButtons: [
        {
          icon: require('../assets/images/share.png'),
          // title: 'Share',
          id: 'share',
          disableIconTint: true,
        }
      ],
    });

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  shareRecipe() {
    Share.share({
      url: this.props.url
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <WebView
        source={{uri: this.props.url}}
        style={{marginTop: 20}}
      />
    )
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'share') {
        this.shareRecipe()
      }
      if (event.id == 'x') {
        // pop back screen
        this.props.navigator.dismissModal()
      }
    }
  }
}

module.exports = ShowURL