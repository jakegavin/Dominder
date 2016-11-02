import Set from "./Set"
import { connect } from "react-redux"

const getCardsInSet = (cards) => (
  cards.filter((card) => {
    return card.status.get("inSet")
  })
)

const mapStateToProps = (state) => {
  return {
    setCards: getCardsInSet(state.cards.get("allCards")),
  }
}

const SetContainer = connect(
  mapStateToProps,
)(Set)

export default SetContainer
