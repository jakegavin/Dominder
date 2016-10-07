export const addCardToSet = (card) => {
  return {
    type: "CARDS_ADD_CARD_TO_SET",
    card: card,
  }
}
