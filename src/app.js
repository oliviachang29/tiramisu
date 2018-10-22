import {Platform} from 'react-native'
import {Navigation} from 'react-native-navigation'
import registerScreens from './screens'
import Utils from './Utils'

registerScreens()

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Discover',
      screen: 'app.Discover',
      icon: require('./assets/images/compass.png'),
      // selectedIcon: require('../img/one_selected.png'),
      title: 'Discover',
      navigatorStyle: Utils.navigatorStyle()
    },
    {
      label: 'Saved',
      screen: 'app.Saved',
      icon: require('./assets/images/saved.png'),
      // selectedIcon: require('../img/one_selected.png'),
      title: 'Saved',
      navigatorStyle: Utils.navigatorStyle()
    },
  ],
  tabsStyle: {
    tabBarSelectedButtonColor: "#FF7473",
  }
});