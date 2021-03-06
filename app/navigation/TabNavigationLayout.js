import React from "react"
import CardsContainer from "../cards/scenes/cards/CardsContainer"
import PreferencesContainer from "../preferences/scenes/preferences/PreferencesContainer"
import SetContainer from "../cards/scenes/set/SetContainer"
import { TabNavigation, TabNavigationItem } from "@exponent/ex-navigation"

export default class TabNavigationLayout extends React.Component {
  render() {
    return (
      <TabNavigation
        initialTab="cards"
        tabBarHeight={48}
      >
        <TabNavigationItem
          id="set"
          title="Set"
        >
          <SetContainer />
        </TabNavigationItem>
        <TabNavigationItem
          id="cards"
          title="Cards"
        >
          <CardsContainer />
        </TabNavigationItem>
        <TabNavigationItem
          id="preferences"
          title="Preferences"
        >
          <PreferencesContainer />
        </TabNavigationItem>
      </TabNavigation>
    )
  }
}
