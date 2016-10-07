import React from "react"
import Card from "./Card"
import CardStack from "./CardStack"
import { Text, View } from "react-native"
import { List } from "immutable"


export default class Cards extends React.Component {
  render() {
    return (
      <View>
        <CardStack
          cards={this.props.cards.toArray()}
          loop={false}
          onAccept={this.props.onAcceptCard}
          onDecline={this.handleDecline}
          renderCard={this.renderCard}
          renderEmptyStack={this.renderEmptyStack}
        />
        <Text>Accepted card count: {this.props.set.size}</Text>
    </View>
    )
  }

  renderCard(cardData) {
    const { title } = cardData
    return <Card title={title} />
  }

  renderEmptyStack() {
    return <Text>No more cards :(</Text>
  }

  handleDecline(card) {
    console.log(`Decline for ${card.title}`)
  }
}

Cards.propTypes = {
  cards: React.PropTypes.instanceOf(List),
  onAcceptCard: React.PropTypes.func.isRequired,
}
