import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
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
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.card, { backgroundColor: '#4CAF50' }]}
        onPress={navigateToSetScreen(WORKOUTS.four_set)}
      >
        <Text style={styles.title}>4-Set Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.card, { backgroundColor: '#2196F3' }]}
        onPress={navigateToSetScreen(WORKOUTS.three_set)}
      >
        <Text style={styles.title}>3-Set Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.card, { backgroundColor: '#E53935' }]}
        onPress={navigateToSetScreen(WORKOUTS.seven_set)}
      >
        <Text style={styles.title}>7-Set Workout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    margin: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
})

export default WorkoutSelectionScreen
