import Cards from "./Cards"
import { connect } from "react-redux"
import { addCardToSet } from "../../cardsActions"

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards.get("cardPile"),
    set: state.cards.get("selectedSet")
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAcceptCard: (card) => dispatch(addCardToSet(card))
  }
}

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards)

export default CardsContainer
