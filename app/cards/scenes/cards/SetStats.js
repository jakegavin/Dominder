import React from "react"
import SetStatCount from "./SetStatCount"
import { StyleSheet, Text, View } from "react-native"
import { List, Map } from "immutable"

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
})

export default class SetStats extends React.Component {
  get actionCount() {
    return this.props.setCards.filter((card) => card.getIn(["type", "action"])).size
  }

  get attackCount() {
    return this.props.setCards.filter((card) => card.getIn(["type", "attack"])).size
  }

  get costCounts() {
    return this.props.setCards.reduce(
      (costMap, card) => {
        const currentCount = costMap.get(card.get("cost")) || 0
        return costMap.set(card.get("cost"), currentCount + 1)
      },
      new Map(),
    )
  }

  get victoryCount() {
    return this.props.setCards.filter((card) => card.getIn(["type", "victory"])).size
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <SetStatCount count={this.props.setCards.size} title="Count" />
          <SetStatCount count={this.actionCount} title="Action" />
          <SetStatCount count={this.attackCount} title="Attack" />
          <SetStatCount count={this.victoryCount} title="Victory" />
        </View>
        <View style={[{ marginTop: 10 }, styles.row]}>
          {this.renderCostStats()}
        </View>
      </View>
    )
  }

  renderCostStats() {
    const costCounts = this.costCounts
    const orderedKeys = costCounts.keySeq().sort()
    return orderedKeys.map((cost) => (
      <SetStatCount key={cost} title={`$${cost}`}  count={costCounts.get(cost)} />
    ))
  }
}

SetStats.propTypes = {
  setCards: React.PropTypes.instanceOf(List).isRequired,
}
