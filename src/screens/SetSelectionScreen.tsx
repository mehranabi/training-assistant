import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { CountdownModal } from '../components'

const MILLIS_IN_SECOND: number = 1000 as const

type Props = NativeStackScreenProps<MainStackParamList, 'SetSelection'>

interface Set {
  key: number
  done: boolean
}

function getInitialSetsArray(count: number): () => Set[] {
  return () =>
    Array.from({ length: count }).map((_, index) => ({
      key: index + 1,
      done: false,
    }))
}

function SetSelectionScreen(props: Props) {
  const {
    route: {
      params: { workout },
    },
  } = props

  const [sets, setSets] = useState<Set[]>(getInitialSetsArray(workout.sets))
  const [countdown, setCountdown] = useState<number>(0)

  const onSetPress = (key: number) => () => {
    setCountdown(workout.timeout)
    setSets((sets) =>
      sets.map((set): Set => {
        if (set.key === key) return { key, done: true }
        return set
      })
    )
  }

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1)
      }, MILLIS_IN_SECOND)
      return () => clearInterval(interval)
    }
    return () => {}
  }, [countdown])

  const isModalVisible = countdown > 0

  return (
    <SafeAreaView style={styles.container}>
      <CountdownModal
        isVisible={isModalVisible}
        duration={workout.timeout}
        time={countdown}
      />
      {sets.map(({ key, done }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onSetPress(key)}
          style={[
            styles.card,
            { backgroundColor: done ? '#CFD8DC' : '#212121' },
          ]}
          disabled={done}
          key={key}
        >
          <Text style={[styles.label, { color: done ? '#fff' : '#F5F5F5' }]}>
            Set #{key}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 8,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  label: {
    textAlign: 'center',
    fontSize: 36,
    color: '#fff',
  },
})

export default SetSelectionScreen
