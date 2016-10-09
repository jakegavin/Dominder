import Preferences from "./Preferences"
import { connect } from "react-redux"
import { setExpansionValue, setSetSize } from "../../preferencesActions"

const mapStateToProps = (state, ownProps) => {
  return {
    expansions: state.preferences.get("expansions"),
    setSize: state.preferences.get("setSize"),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onExpansionValueChange: (expansion, value) => dispatch(setExpansionValue(expansion, value)),
    onSetSizeChange: (value) => dispatch(setSetSize(value)),
  }
}

const PreferencesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences)

export default PreferencesContainer
