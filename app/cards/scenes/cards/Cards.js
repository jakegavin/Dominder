import React from "react"
import Card from "./Card"
import CardStack from "./CardStack"
import SetStats from "./SetStats"
import { Text, TouchableHighlight, View } from "react-native"
import { List, Map } from "immutable"

export default class Cards extends React.Component {
  render() {
    return (
      <View>
        <CardStack
          cards={this.props.cards.toArray()}
          currentCard={this.props.currentCard}
          loop={false}
          onAccept={this.props.onAcceptCard}
          onDecline={this.handleDecline}
          renderCard={this.renderCard}
          renderEmptyStack={this.renderEmptyStack.bind(this)}
          setCurrentCard={this.props.setCurrentCard}
        />
        <SetStats setCards={this.props.set} />
    </View>
    )
  }

  renderCard(card) {
    return <Card name={card.get("name")} cost={card.get("cost")} />
  }

  renderEmptyStack() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onReset}>
          <Text>Reset pile?</Text>
        </TouchableHighlight>
        <Text>No more cards :(</Text>
      </View>
    )
  }

  handleDecline(card) {
    console.log(`Decline for ${card.name}`)
  }
}

Cards.propTypes = {
  cards: React.PropTypes.instanceOf(List),
  currentCard: React.PropTypes.object,
  onAcceptCard: React.PropTypes.func.isRequired,
  onReset: React.PropTypes.func.isRequired,
  setCurrentCard: React.PropTypes.func.isRequired,
}
