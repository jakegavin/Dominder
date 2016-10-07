import rootReducer from "./rootReducer"
import createLogger from "redux-logger"
import { createStore, applyMiddleware } from "redux"
import * as Immutable from "immutable"

const immutableToJS = (object) => {
  let newState = {}

  if (typeof object === "object" && object !== null && Object.keys(object).length) {
    for (const i of Object.keys(object)) {
      if (Immutable.Iterable.isIterable(object[i])) {
        newState[i] = object[i].toJS()
      } else {
        newState[i] = immutableToJS(object[i])
      }
    }
  } else {
    newState = object
  }

  return newState
}

const logger = createLogger({
  collapsed: true,
  stateTransformer: immutableToJS,
  actionTransformer: immutableToJS,
})

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

export default store
