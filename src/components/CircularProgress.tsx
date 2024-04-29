import Svg, { Circle } from 'react-native-svg'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import { useEffect, useRef } from 'react'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const DEFAULT_SIZE: number = 250 as const
const DEFAULT_BORDER_SIZE: number = 30 as const
const DEFAULT_COLOR: string = '#000' as const

const ANIMATION_DURATION: number = 1000 as const
const STROKE_TIP: number = 5 as const

interface CircularProgressProps {
  duration: number
  size?: number
  borderSize?: number
  color?: string
  label?: string
}

function CircularProgress(props: CircularProgressProps) {
  const {
    borderSize = DEFAULT_BORDER_SIZE,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    label,
    duration,
  } = props

  const offset = (size - borderSize) * Math.PI

  const animation = useRef<Animated.Value>(new Animated.Value(0)).current

  useEffect(() => {
    if (duration) {
      animation.setValue(0)
      Animated.timing(animation, {
        toValue: offset - STROKE_TIP,
        duration: duration * 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
    } else {
      animation.setValue(offset - STROKE_TIP)
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: offset - STROKE_TIP,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
        ])
      ).start()
    }
  }, [])

  return (
    <View style={{ width: size, height: size }}>
      {!!label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
      <Svg width={size} height={size}>
        <Circle
          cy={size / 2}
          cx={size / 2}
          r={(size - borderSize) / 2}
          fill="none"
          stroke={color}
          strokeOpacity={0.1}
          strokeWidth={borderSize}
        />
        <AnimatedCircle
          cy={size / 2}
          cx={size / 2}
          r={(size - borderSize) / 2}
          fill="none"
          stroke={color}
          strokeWidth={borderSize}
          strokeDasharray={offset}
          strokeDashoffset={animation}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 48,
  },
})

export default CircularProgress
