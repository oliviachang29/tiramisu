import {Navigation} from 'react-native-navigation'
import Notification from './Notification'
import Discover from './Discover'
import ShowRecipe from './ShowRecipe'

export default function () {
  Navigation.registerComponent('app.Notification', () => Notification)
  Navigation.registerComponent('app.Discover', () => Discover)
  Navigation.registerComponent('app.ShowRecipe', () => ShowRecipe)
}
