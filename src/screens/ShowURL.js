import React, { Component } from 'react'
import { WebView } from 'react-native'

class ShowURL extends Component {
  render () {
    return (
      <WebView
        source={{uri: this.props.url}}
        style={{marginTop: 20}}
      />
    )
  }
}

module.exports = ShowURL