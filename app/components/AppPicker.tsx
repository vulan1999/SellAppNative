import {
  Button,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import AppText from './AppText'
import Screen from './Screen'

interface Props {
  icon?: any
  placeholder: string
}

const AppPicker = ({ ...props }: Props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          <View style={styles.category}>
            {props.icon && (
              <MaterialCommunityIcons
                name={props.icon}
                color={colors.mediumGray}
                size={20}
                style={styles.icon}
              />
            )}
            <AppText>{props.placeholder}</AppText>
          </View>
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.mediumGray}
            size={20}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <Screen>
          <Button onPress={() => setShowModal(false)} title="Close" />
        </Screen>
      </Modal>
    </>
  )
}

export default AppPicker

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  category: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontSize: 18,
    color: colors.darkGrey,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
})
