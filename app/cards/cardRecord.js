import { Map, Record } from "immutable"

export const Card = new Record({
  cost: null,
  costAttributes: new Map({
    overpayAllowed: null,
    requiresPotion: null,
  }),
  expansion: null,
  id: null,
  name: null,
  notInSupply: null,
  status: new Map({
    inPile: false,
    inSet: false,
    viewed: false,
  }),
  type: new Map({
    action: null,
    attack: null,
    event: null,
    duration: null,
    reaction: null,
    reserve: null,
    treasure: null,
    traveller: null,
    victory: null,
  }),
  text: "",
})
