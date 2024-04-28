import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WorkoutSelectionScreen, SetSelectionScreen } from '../screens'
import { MainStackParamList } from './types'

const MainStack = createNativeStackNavigator<MainStackParamList>()

function AppNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="WorkoutSelection"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name="WorkoutSelection"
        component={WorkoutSelectionScreen}
      />
      <MainStack.Screen name="SetSelection" component={SetSelectionScreen} />
    </MainStack.Navigator>
  )
}

export default AppNavigator
