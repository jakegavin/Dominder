import { List, Map } from "immutable"

const DEFAULT_CARD_PILE = new List([{ title: "Card 1" }, { title: "Card 2" }, { title: "Card 3" }])

const DEFAULT_CARDS = new Map({
  cardPile: DEFAULT_CARD_PILE,
  currentCard: DEFAULT_CARD_PILE.first(),
  selectedSet: new List()
})

export default function cards(state = DEFAULT_CARDS, action) {
  switch (action.type) {
    case "CARDS_ADD_CARD_TO_SET":
      const nextSelectedSet = state.get("selectedSet").push(action.card)
      return state.set("selectedSet", nextSelectedSet)
    case "CARDS_RESET_PILE":
      return state.set("cardPile", DEFAULT_CARD_PILE).set("currentCard", DEFAULT_CARD_PILE.first())
    case "CARDS_SET_CURRENT_CARD":
      return state.set("currentCard", action.card)
    default:
      return state
  }
}
