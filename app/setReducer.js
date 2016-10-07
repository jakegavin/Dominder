import { List } from "immutable"

const DEFAULT_SET = new List()

export default function set(state = DEFAULT_SET, action) {
  switch (action.type) {
    default:
      return state
  }
}
