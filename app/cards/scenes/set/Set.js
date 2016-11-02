import React from "react"
import { Text, View } from "react-native"
import { Map } from "immutable"

export default class Set extends React.Component {
  render() {
    return (
      <View>
        {this.props.setCards.map((card) => (
          <Text key={card.id}>{card.name} - ${card.cost}</Text>
        )).toArray()}
        {this.props.setCards.size === 0 && (
          <Text>There are no cards in your set. Once you swipe some cards right, they will show up here.</Text>
        )}
      </View>
    )
  }
}

Set.propTypes = {
  setCards: React.PropTypes.instanceOf(Map)
}

Set.defaultProps = {
  setCards: new Map(),
}
