export interface Workout {
  sets: number
  timeout: number
}

const WORKOUTS: Record<'four_set' | 'three_set' | 'seven_set', Workout> = {
  four_set: {
    sets: 4,
    timeout: 90,
  },
  three_set: {
    sets: 3,
    timeout: 90,
  },
  seven_set: {
    sets: 7,
    timeout: 40,
  },
}

export default WORKOUTS
