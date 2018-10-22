import {Navigation} from 'react-native-navigation'
import Notification from './Notification'
import Discover from './Discover'
import ShowRecipe from './ShowRecipe'
import Saved from './Saved'
import Onboarding from './Onboarding'
import ShowURL from './ShowURL'
import Recipe from './Recipe'

export default function () {
  Navigation.registerComponent('app.Notification', () => Notification)
  Navigation.registerComponent('app.Discover', () => Discover)
  Navigation.registerComponent('app.ShowRecipe', () => ShowRecipe)
  Navigation.registerComponent('app.Saved', () => Saved)
  Navigation.registerComponent('app.ShowURL', () => ShowURL)
  Navigation.registerComponent('app.Onboarding', () => Onboarding)
  Navigation.registerComponent('app.Recipe', () => Recipe)
}
