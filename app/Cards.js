import React from "react"
import Card from "./Card"
import CardStack from "./CardStack"
import { Text } from "react-native"

const CARDS = [{ title: "Card 1" }, { title: "Card 2" }, { title: "Card 3" }]

export default class Cards extends React.Component {
  render() {
    return (
      <CardStack
        cards={CARDS}
        loop={false}
        onAccept={this.handleAccept}
        onDecline={this.handleDecline}
        renderCard={this.renderCard}
        renderEmptyStack={this.renderEmptyStack}
      />
    )
  }

  renderCard(cardData) {
    const { title } = cardData
    return <Card title={title} />
  }

  renderEmptyStack() {
    return <Text>No more cards :(</Text>
  }

  handleAccept(card) {
    console.log(`Accept for ${card.title}`)
  }

  handleDecline(card) {
    console.log(`Decline for ${card.title}`)
  }
}
