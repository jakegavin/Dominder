import { combineReducers } from "redux"
import set from "./setReducer"

const rootReducer = combineReducers({
  set,
})

export default rootReducer
