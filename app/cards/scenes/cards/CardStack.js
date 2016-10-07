import React from "react"
import CardStackCard from "./CardStackCard"

export default class CardStack extends React.Component {
  render() {
    if (this.props.currentCard) {
      return (
        <CardStackCard
          card={this.props.currentCard}
          getNextCard={this._showNextCard.bind(this)}
          onAccept={this.props.onAccept}
          onDecline={this.props.onDecline}
          renderCard={this.props.renderCard}
        />
      )
    } else {
      return this.props.renderEmptyStack()
    }
  }

  _showNextCard() {
    let card
    let currentCardIndex = this.props.cards.indexOf(this.props.currentCard)
    let nextIndex = currentCardIndex + 1

    // Checks to see if last card.
    // If props.loop=true, will start again from the first card.
    if (nextIndex > this.props.cards.length - 1) {
      nextCard = this.props.loop ? this.props.cards[0] : null
    } else {
      nextCard = this.props.cards[nextIndex]
    }

    this.props.setCurrentCard(nextCard)
  }
}

CardStack.propTypes = {
  cards: React.PropTypes.array,
  currentCard: React.PropTypes.object,
  loop: React.PropTypes.bool,
  renderCard: React.PropTypes.func.isRequired,
  renderEmptyStack: React.PropTypes.func.isRequired,
  setCurrentCard: React.PropTypes.func.isRequired,
}

CardStack.defaultProps = {
  loop: true,
}
