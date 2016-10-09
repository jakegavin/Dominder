import React from "react"
import Card from "./Card"
import CardStack from "./CardStack"
import SetStats from "./SetStats"
import BottomButtons from "./BottomButtons"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { List, Map } from "immutable"

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
            loop={false}
            onAccept={this.props.onAcceptCard}
            onDecline={this.handleDecline}
            renderCard={this.renderCard}
            renderEmptyStack={this.renderEmptyStack.bind(this)}
            setCurrentCard={this.props.setCurrentCard}
          />
        </View>
        <BottomButtons onReset={this.props.onReset} />
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
