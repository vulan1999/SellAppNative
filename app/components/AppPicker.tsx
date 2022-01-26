import {
  Button,
  FlatList,
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
import { Category } from '../screens/SearchScreen'
import PickerItem from './PickerItem'
import Divider from './Divider'

interface Props {
  icon?: any
  placeholder: string
  items: Category[]
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
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
            <AppText>
              {props.category !== '' ? props.category : props.placeholder}
            </AppText>
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
          <FlatList
            data={props.items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  console.log('pressed')
                  // props.setCategory(item.label)
                  // setShowModal(false)
                }}
              />
            )}
            ItemSeparatorComponent={() => <Divider />}
          />
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
