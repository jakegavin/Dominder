import { combineReducers } from "redux"
import cards from "./cards/cardsReducer"
import preferences from "./preferences/preferencesReducer"

const rootReducer = combineReducers({
  cards,
  preferences,
})

export default rootReducer
