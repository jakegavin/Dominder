import React from "react"
import { Text, View } from "react-native"
import { List, Map } from "immutable"

export default class SetStats extends React.Component {
  get costCounts() {
    return this.props.setCards.reduce(
      (costMap, card) => {
        const currentCount = costMap.get(card.cost) || 0
        console.log(costMap, currentCount)
        return costMap.set(card.cost, currentCount + 1)
      },
      new Map(),
    )
  }

  render() {
    return (
      <View>
        <Text>Card Count: {this.props.setCards.size}</Text>
        {this.costCounts.map((count, cost) => <Text key={cost}>${cost}: {count}</Text>).toArray()}
      </View>
    )
  }
}

SetStats.propTypes = {
  setCards: React.PropTypes.instanceOf(List).isRequired,
}
