import { combineReducers } from "redux"
import cards from "./cards/cardsReducer"

const rootReducer = combineReducers({
  cards,
})

export default rootReducer
