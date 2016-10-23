export const addCardToSet = (card) => {
  return {
    type: "CARDS_ADD_CARD_TO_SET",
    cardId: card.id,
  }
}

export const declineCard = (card) => {
  console.log(card.toJS())
  return {
    type: "CARDS_MARK_CARD_VIEWED",
    cardId: card.id,
  }
}

export const resetCardPile = () => {
  return {
    type: "CARDS_RESET_PILE",
  }
}

export const resetCurrentCard = () => {
  return {
    type: "CARDS_RESET_CURRENT_CARD"
  }
}

export const setCurrentCard = (card) => {
  return {
    type: "CARDS_SET_CURRENT_CARD",
    card: card,
  }
}
