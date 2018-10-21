import {Platform} from 'react-native'
import {Navigation} from 'react-native-navigation'
import registerScreens from './screens'
import Utils from './Utils'

registerScreens()

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Discover',
      screen: 'app.Discover', // this is a registered name for a screen
      // icon: require('../img/one.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Discover'
    },
    {
      label: 'Saved',
      screen: 'app.Saved', // this is a registered name for a screen
      // icon: require('../img/one.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Saved'
    },
  ]
});