import React from "react"
import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#1f509e",
    height: 150,
    justifyContent: "center",
    width: 150,
  },
  title: {
    fontSize: 24,
    color: "white",
  }
})

export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.card} >
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <Text style={styles.title}>
          ${this.props.cost}
        </Text>


      </View>
    )
  }
}

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  cost: React.PropTypes.number.isRequired,
}
