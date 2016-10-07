import Cards from "./Cards"
import { connect } from "react-redux"
import { addCardToSet, setCurrentCard } from "../../cardsActions"

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards.get("cardPile"),
    currentCard: state.cards.get("currentCard"),
    set: state.cards.get("selectedSet"),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAcceptCard: (card) => dispatch(addCardToSet(card)),
    setCurrentCard: (card) => dispatch(setCurrentCard(card)),
  }
}

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards)

export default CardsContainer
