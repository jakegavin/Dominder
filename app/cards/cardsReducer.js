import { List, Map } from "immutable"
import { Card } from "./cardRecord"
import Immutable from "immutable"
import cardsData from "./cards.json"

const DEFAULT_CARDS = cardsData.reduce(
  (cardsList, card, index) => {
    const id = index + 1
    return cardsList.set(
      id,
      new Card({
        cost: card.cost,
        costAttributes: new Map({
          overpayAllowed: card.cost_attributes.overpay_allowed,
          requiresPotion: card.cost_attributes.requires_potion,
        }),
        expansion: card.expansion,
        id: id,
        name: card.name,
        notInSupply: card.not_in_supply,
        status: new Map({
          inPile: false,
          inSet: false,
          viewed: false,
        }),
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
  },
  new Map(),
)

const DEFAULT_CARDS_STATE = new Map({
  allCards: DEFAULT_CARDS,
  currentCard: null,
})

export default function cards(state = DEFAULT_CARDS_STATE, action) {
  switch (action.type) {
    case "CARDS_ADD_CARD_TO_SET": {
      const id = action.cardId
      const nextCard = state.getIn(["allCards", id])
        .setIn(["status", "inSet"], true)
        .setIn(["status", "viewed"], true)
      return state.setIn(["allCards", id], nextCard)
    }

    case "CARDS_MARK_CARD_VIEWED": {
      const id = action.cardId
      const nextCard = state.getIn(["allCards", id]).setIn(["status", "viewed"], true)
      return state.setIn(["allCards", id], nextCard)
    }

    case "CARDS_RESET_CURRENT_CARD":
      const potentialCards = state.get("allCards")
        .filter((card) => card.getIn(["status", "inPile"]) && !card.getIn(["status", "viewed"]))
      return state.set("currentCard", potentialCards.sortBy(() => Math.random()).first())

    case "CARDS_RESET_PILE":
      const cardIds = state.get("allCards")
        .filter((card) => card.status.get("inPile") && !card.status.get("inSet"))
        .map((card) => card.id)
      return cardIds.reduce(
        (nextState, cardId) => {
          const nextCard = nextState.getIn(["allCards", cardId]).setIn(["status", "viewed"], false)
          return nextState.setIn(["allCards", cardId], nextCard)
        },
        state
      )

    case "CARDS_SET_CURRENT_CARD":
      return state.set("currentCard", action.card)

    case "PREFERENCES_SET_EXPANSION":
      const expansionCardIds = state.get("allCards")
        .filter((card) => card.expansion === action.expansion)
        .map((card) => card.id)
      return expansionCardIds.reduce(
        (nextState, cardId) => {
          const nextCard = nextState.getIn(["allCards", cardId]).setIn(["status", "inPile"], action.value)
          return nextState.setIn(["allCards", cardId], nextCard)
        },
        state
      )

    default:
      return state
  }
}
