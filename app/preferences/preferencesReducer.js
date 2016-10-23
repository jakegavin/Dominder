import { Map } from "immutable"

const DEFAULT_PREFERENCES = new Map({
  expansions: new Map({
    Promo: false,
    Dominion: false,
    Intrigue: false,
    Seaside: false,
    Alchemy: false,
    Prosperity: false,
    Cornucopia: false,
    Hinterlands: false,
    DarkAges: false,
    Guilds: false,
    Adventures: false,
  }),
  setSize: 10,
})

export default function preferences(state = DEFAULT_PREFERENCES, action) {
  switch(action.type) {
    case "PREFERENCES_SET_EXPANSION":
      return state.setIn(["expansions", action.expansion], action.value)
    case "PREFERENCES_SET_SET_SIZE":
      return state.set("setSize", action.value)
    default:
      return state
  }
}
