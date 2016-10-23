import { Map, Record } from "immutable"

export const Card = new Record({
  name: null,
  expansion: null,
  cost: null,
  costAttributes: new Map({
    overpayAllowed: null,
    requiresPotion: null,
  }),
  notInSupply: null,
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
