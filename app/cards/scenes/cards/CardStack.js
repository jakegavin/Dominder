import React from "react"
import CardStackCard from "./CardStackCard"

export default class CardStack extends React.Component {
  render() {
    if (this.props.currentCard) {
      return (
        <CardStackCard
          card={this.props.currentCard}
          getNextCard={this.props.getNextCard}
          onAccept={this.props.onAccept}
          onDecline={this.props.onDecline}
          renderCard={this.props.renderCard}
        />
      )
    } else {
      return this.props.renderEmptyStack()
    }
  }
}

CardStack.propTypes = {
  cards: React.PropTypes.array,
  currentCard: React.PropTypes.object,
  getNextCard: React.PropTypes.func.isRequired,
  loop: React.PropTypes.bool,
  renderCard: React.PropTypes.func.isRequired,
  renderEmptyStack: React.PropTypes.func.isRequired,
}
