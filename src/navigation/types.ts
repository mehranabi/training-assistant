import { Workout } from '../workouts'

export type MainStackParamList = {
  WorkoutSelection: undefined
  SetSelection: { workout: Workout }
}

type RootStackParamList = MainStackParamList

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
