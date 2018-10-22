// import realm from './realm'
import uuid from 'uuid'
var moment = require('moment')
import {Navigation} from 'react-native-navigation'

let Utils = {
  navigatorStyle () {
    return {
      navBarTextFontFamily: 'Circular-Bold',
      navBarHidden: false,
      navBarBackgroundColor: "#FF7473",
      navBarTextColor: "white",
      navBarButtonColor: 'white',
      navBarRightButtonFontSize: 10,
      navBarNoBorder: true,
      statusBarTextColorSchemeSingleScreen: 'light'
    }
  },
  uuid() {
    return uuid.v4()
  },
}

module.exports = Utils
