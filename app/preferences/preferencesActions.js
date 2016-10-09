export const setExpansionValue = (expansion, value) => {
  return {
    type: "PREFERENCES_SET_EXPANSION",
    expansion: expansion,
    value: value,
  }
}

export const setSetSize = (value) => {
  return {
    type: "PREFERENCES_SET_SET_SIZE",
    value: value,
  }
}
