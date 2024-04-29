import { Modal, StyleSheet, View } from 'react-native'
import CircularProgress from './CircularProgress'

interface CountdownModalProps {
  isVisible: boolean
  time: number
  duration: number
}

function CountdownModal(props: CountdownModalProps) {
  const { isVisible, duration, time } = props

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      style={styles.modal}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <CircularProgress duration={duration} label={time.toString()} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ECEFF1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#616161',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default CountdownModal
