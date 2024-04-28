import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/types'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { useState } from 'react'

type Props = NativeStackScreenProps<MainStackParamList, 'SetSelection'>

interface Set {
  key: number
  done: boolean
}

function getInitialSetsArray(count: number): () => Set[] {
  return () =>
    Array.from({ length: count }).map((_, index) => ({
      key: index,
      done: false,
    }))
}

function SetSelectionScreen(props: Props) {
  const {
    route: {
      params: { workout },
    },
  } = props

  const [sets, setSets] = useState(getInitialSetsArray(workout.sets))

  const onSetPress = (key: number) => () => {
    setSets((sets) =>
      sets.map((set) => {
        if (set.key === key) return { key, done: true }
        return set
      })
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {sets.map(({ key, done }) => (
        <TouchableHighlight
          onPress={onSetPress(key)}
          style={[
            styles.card,
            { backgroundColor: done ? '#C5CAE9' : '#303F9F' },
          ]}
          underlayColor="#283593"
          disabled={done}
          key={key}
        >
          <Text style={styles.label}>#{key} Set</Text>
        </TouchableHighlight>
      ))}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  label: {
    textAlign: 'center',
    fontSize: 36,
    color: '#fff',
  },
})

export default SetSelectionScreen
