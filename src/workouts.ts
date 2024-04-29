export interface Workout {
  key: string
  sets: number
  timeout: number
}

const WORKOUTS: Workout[] = [
  {
    key: '4set',
    sets: 4,
    timeout: 10,
  },
  {
    key: '3set',
    sets: 3,
    timeout: 10,
  },
  {
    key: '7set',
    sets: 7,
    timeout: 10,
  },
]

export default WORKOUTS
