import { List, Map } from "immutable"
import { Card } from "./cardRecord"
import Immutable from "immutable"
import cardsData from "./cards.json"

const DEFAULT_CARD_PILE = cardsData.reduce(
  (cardsList, card) => (
    cardsList.push(
      new Card({
        name: card.name,
        expansion: card.expansion,
        cost: card.cost,
        costAttributes: new Map({
          overpayAllowed: card.cost_attributes.overpay_allowed,
          requiresPotion: card.cost_attributes.requires_potion,
        }),
        notInSupply: card.not_in_supply,
        type: new Map({
          action: card.type.action,
          attack: card.type.attack,
          event: card.type.event,
          duration: card.type.duration,
          reaction: card.type.reaction,
          reserve: card.type.reserve,
          treasure: card.type.treasure,
          traveller: card.type.traveller,
          victory: card.type.victory,
        }),
        text: "",
      })
    )
  ),
  new List(),
)

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
