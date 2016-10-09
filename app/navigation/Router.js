import TabNavigationLayout from "./TabNavigationLayout"
import CardsContainer from "../cards/scenes/cards/CardsContainer"
import Preferences from "../preferences/scenes/preferences/Preferences"
import { createRouter } from "@exponent/ex-navigation"

export default createRouter(() => ({
  cards: () => CardsContainer,
  preferences: () => Preferences,
  tabNavigation: () => TabNavigationLayout,
}))
