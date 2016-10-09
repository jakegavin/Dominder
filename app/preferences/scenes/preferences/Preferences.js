import React from "react"
import ExpansionToggle from "./ExpansionToggle"
import SetSize from "./SetSize"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { List, Map } from "immutable"

export default class Preferences extends React.Component {
  render() {
    const expansions = ["Dominion", "Intrigue", "Seaside", "Alchemy", "Prosperity", "Cornucopia", "Hinterlands", "DarkAges", "Guilds", "Adventures"]
    return (
      <ScrollView>
        <Text>Expansions</Text>
        {
          expansions.map((expansion) => (
            <ExpansionToggle
              key={expansion}
              expansion={expansion}
              onChange={this.props.onExpansionValueChange}
              value={this.props.expansions.get(expansion)}
            />
          ))
        }
        <Text>Other</Text>
        <SetSize
          onChange={this.props.onSetSizeChange}
          value={this.props.setSize}
        />
      </ScrollView>
    )
  }
}

Preferences.propTypes = {
  expansions: React.PropTypes.instanceOf(Map).isRequired,
  onExpansionValueChange: React.PropTypes.func.isRequired,
  onSetSizeChange: React.PropTypes.func.isRequired,
  setSize: React.PropTypes.number.isRequired,
}
