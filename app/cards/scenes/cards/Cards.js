import React from "react"
import Card from "./Card"
import CardStack from "./CardStack"
import SetStats from "./SetStats"
import BottomButtons from "./BottomButtons"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { Map } from "immutable"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
  },
  cardStack: {
    flex: 1,
    justifyContent: "center",
  }
})

export default class Cards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SetStats setCards={this.props.set} />
        <View style={styles.cardStack}>
          <CardStack
            cards={this.props.cards.toArray()}
            currentCard={this.props.currentCard}
            getNextCard={this.props.onResetCurrentCard}
            onAccept={this.props.onAcceptCard}
            onDecline={this.props.onDeclineCard}
            renderCard={this.renderCard}
            renderEmptyStack={this.renderEmptyStack.bind(this)}
          />
        </View>
        <BottomButtons onResetPile={this.handleReset.bind(this)} />
      </View>
    )
  }

  renderCard(card) {
    return <Card name={card.get("name")} cost={card.get("cost")} />
  }

  renderEmptyStack() {
    return (
      <View>
        <TouchableHighlight onPress={this.handleReset.bind(this)}>
          <Text>Reset pile?</Text>
        </TouchableHighlight>
        <Text>No more cards :(</Text>
      </View>
    )
  }

  handleReset() {
    this.props.onResetPile()
    this.props.onResetCurrentCard()
  }
}

Cards.propTypes = {
  cards: React.PropTypes.instanceOf(Map),
  currentCard: React.PropTypes.object,
  onAcceptCard: React.PropTypes.func.isRequired,
  onDeclineCard: React.PropTypes.func.isRequired,
  onResetCurrentCard: React.PropTypes.func.isRequired,
  onResetPile: React.PropTypes.func.isRequired,
}
