import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import WORKOUTS, { Workout } from '../workouts'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/types'

type Navigation = NativeStackNavigationProp<
  MainStackParamList,
  'WorkoutSelection'
>

function WorkoutSelectionScreen() {
  const { navigate } = useNavigation<Navigation>()

  const navigateToSetScreen = (workout: Workout) => () =>
    navigate('SetSelection', { workout })

  return (
    <SafeAreaView style={styles.container}>
      {WORKOUTS.map((workout) => (
        <TouchableOpacity
          key={workout.key}
          activeOpacity={0.8}
          style={[styles.card, { backgroundColor: '#212121' }]}
          onPress={navigateToSetScreen(workout)}
        >
          <Text style={styles.title}>{workout.sets}-Set Workout</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  container: {
    flex: 1,
    gap: 8,
    padding: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FAFAFA',
  },
})

export default WorkoutSelectionScreen
