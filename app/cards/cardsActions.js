export const addCardToSet = (card) => {
  return {
    type: "CARDS_ADD_CARD_TO_SET",
    card: card,
  }
}

export const resetCardPile = () => {
  return {
    type: "CARDS_RESET_PILE",
  }
}

export const setCurrentCard = (card) => {
  return {
    type: "CARDS_SET_CURRENT_CARD",
    card: card,
  }
}
