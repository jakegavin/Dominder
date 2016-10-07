import React from "react"
import clamp from "clamp"
import { Animated, PanResponder, StyleSheet, View } from "react-native"

const SWIPE_THRESHOLD = 120

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
  },
})

export default class CardStack extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      card: this.props.cards ? this.props.cards[0] : null,
      enter: new Animated.Value(0),
      pan: new Animated.ValueXY(),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards && nextProps.cards.length > 0) {
      this.setState({ card: nextProps.cards[0] })
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value })
        this.state.pan.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y },
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        let velocity
        const {vx, vy} = gestureState
        this.state.pan.flattenOffset()

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5)
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
          if (this.state.pan.x._value > 0) {
            this.props.onAccept(this.state.card)
          } else {
            this.props.onDecline(this.state.card)
          }

          if (this.props.cardRemoved) {
            this.props.cardRemoved(this.props.cards.indexOf(this.state.card))
          }

          Animated.decay(this.state.pan, {
            velocity: { x: velocity, y: vy },
            deceleration: 0.98
          }).start(this._resetState.bind(this))
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 4
          }).start()
        }
      },
    })
  }

  componentDidMount() {
    this._animateEntrance()
  }

  render() {
    const { enter, pan, } = this.state
    const scale = enter
    const translateX = pan.x
    const translateY = pan.y

    const rotate = pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ["-30deg", "0deg", "30deg"]
    })
    const opacity = pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: [0.5, 1, 0.5]
    })
    const animatedCardstyles = {
      transform: [{translateX}, {translateY}, {rotate}, {scale}],
      opacity: opacity,
    }

    const acceptOpacity = pan.x.interpolate({ inputRange: [0, 150], outputRange: [0, 1] })
    const acceptScale = pan.x.interpolate({
      inputRange: [0, 150],
      outputRange: [0.5, 1],
      extrapolate: "clamp",
    })
    const animatedAcceptStyles = {
      transform: [{ scale: acceptScale}],
      opacity: acceptOpacity,
    }

    const declineOpacity = pan.x.interpolate({ inputRange: [-150, 0], outputRange: [1, 0] })
    const declineScale = pan.x.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0.5],
      extrapolate: "clamp",
    })
    const animatedDeclineStyles = {
      transform: [{scale: declineScale}],
      opacity: declineOpacity,
    }

    return (
      <View style={styles.container}>
        {this.state.card
          ? (
            <Animated.View style={[animatedCardstyles]} {...this._panResponder.panHandlers}>
              {this.props.renderCard(this.state.card)}
            </Animated.View>
          ) : (
            this.props.renderEmptyStack()
          )
        }
        {this.props.renderDecline && this.props.renderDecline(pan)}
        {this.props.renderAccept && this.props.renderAccept(pan)}
      </View>
    )
  }

  _animateEntrance() {
    Animated.spring(
      this.state.enter,
      { toValue: 1, friction: 8 }
    ).start()
  }

  _showNextCard() {
    let card
    let currentCardIndex = this.props.cards.indexOf(this.state.card)
    let nextIndex = currentCardIndex + 1

    // Checks to see if last card.
    // If props.loop=true, will start again from the first card.
    if (nextIndex > this.props.cards.length - 1) {
      nextCard = this.props.loop ? this.props.cards[0] : null
    } else {
      nextCard = this.props.cards[nextIndex]
    }

    this.setState({ card: nextCard })
  }

  _resetState() {
    this.state.pan.setValue({ x: 0, y: 0 })
    this.state.enter.setValue(0)
    this._showNextCard()
    this._animateEntrance()
  }
}

CardStack.propTypes = {
  cards: React.PropTypes.array,
  loop: React.PropTypes.bool,
  onAccept: React.PropTypes.func.isRequired,
  onDecline: React.PropTypes.func.isRequired,
  renderCard: React.PropTypes.func.isRequired,
  renderEmptyStack: React.PropTypes.func.isRequired,
}

CardStack.defaultProps = {
  loop: true,
}
