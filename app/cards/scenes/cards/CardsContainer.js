import Cards from "./Cards"
import { connect } from "react-redux"
import { addCardToSet, declineCard, resetCardPile, resetCurrentCard, setCurrentCard } from "../../cardsActions"

const getCardsInPile = (cards) => {
  return cards.filter((card) => {
    return card.status.get("inDeck")
  })
}

const getCardsInSet = (cards) => (
  cards.filter((card) => {
    return card.status.get("inSet")
  })
)

const mapStateToProps = (state, ownProps) => {
  return {
    cards: getCardsInPile(state.cards.get("allCards")),
    currentCard: state.cards.get("currentCard"),
    set: getCardsInSet(state.cards.get("allCards")),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAcceptCard: (card) => dispatch(addCardToSet(card)),
    onDeclineCard: (card) => dispatch(declineCard(card)),
    onResetCurrentCard: () => dispatch(resetCurrentCard()),
    onResetPile: (card) => dispatch(resetCardPile(card)),
    setCurrentCard: (card) => dispatch(setCurrentCard(card)),
  }
}

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards)

export default CardsContainer
