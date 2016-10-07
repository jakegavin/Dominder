import React from "react"
import clamp from "clamp"
import { Animated, PanResponder, View } from "react-native"

const SWIPE_THRESHOLD = 120

export default class CardStackCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: new Animated.Value(0),
      pan: new Animated.ValueXY(),
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
            this.props.onAccept(this.props.card)
          } else {
            this.props.onDecline(this.props.card)
          }

          Animated.decay(this.state.pan, {
            velocity: { x: velocity, y: vy },
            deceleration: 0.98
          }).start(this.props.getNextCard)
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

  componentWillReceiveProps(nextProps) {
    this.state.pan.setValue({ x: 0, y: 0 })
    this.state.scale.setValue(0)
    this._animateEntrance()
  }

  render() {
    const { scale, pan, } = this.state
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
      <Animated.View style={animatedCardstyles} {...this._panResponder.panHandlers}>
        {this.props.renderCard(this.props.card)}
      </Animated.View>
    )
  }

  _animateEntrance() {
    Animated.spring(
      this.state.scale,
      { toValue: 1, friction: 8 }
    ).start()
  }
}

CardStackCard.propTypes = {
  card: React.PropTypes.object,
  getNextCard: React.PropTypes.func.isRequired,
  onAccept: React.PropTypes.func.isRequired,
  onDecline: React.PropTypes.func.isRequired,
  renderCard: React.PropTypes.func.isRequired,
}
