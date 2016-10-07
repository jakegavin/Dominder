import { List, Map } from "immutable"

const DEFAULT_CARD_PILE = new List([
  { title: "Card 1", cost: 1 },
  { title: "Card 2", cost: 4  },
  { title: "Card 3", cost: 5  },
  { title: "Card 4", cost: 3  },
  { title: "Card 5", cost: 2  },
  { title: "Card 6", cost: 4  },
  { title: "Card 7", cost: 5  },
  { title: "Card 8", cost: 1  },
  { title: "Card 9", cost: 4  },
  { title: "Card 10", cost: 4  },
  { title: "Card 11", cost: 3  },
  { title: "Card 12", cost: 2  },
])

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
