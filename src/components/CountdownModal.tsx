import { Modal, StyleSheet, Text, View } from 'react-native'

interface CountdownModalProps {
  isVisible: boolean
  duration: number
  time: number
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
          <Text style={styles.text}>Take some rest!</Text>
          <Text style={styles.text}>
            {time}/{duration}
          </Text>
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
