import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

import { Swipeable } from 'react-native-gesture-handler'

interface Props {
  imageSource?: any
  title: string
  subTitle?: string
  onPress: any
  renderRightAction?: () => JSX.Element
  icon?: any
}
const ListItem = ({ ...props }: Props) => {
  return (
    <Swipeable renderRightActions={props.renderRightAction}>
      <TouchableHighlight onPress={props.onPress} underlayColor={colors.light}>
        <View style={styles.listingContainer}>
          {props.imageSource && (
            <Image source={props.imageSource} style={styles.userImage} />
          )}
          {props.icon}
          <View style={styles.detailContainer}>
            <Text style={styles.title}>{props.title}</Text>
            {props.subTitle && (
              <Text style={styles.subTitle}>{props.subTitle}</Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem

const styles = StyleSheet.create({
  listingContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
  subTitle: {
    color: '#777',
  },
  deleteActionContainer: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
