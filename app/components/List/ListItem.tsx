import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
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
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
            {props.subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {props.subTitle}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            color="black"
            size={20}
          />
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
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailContainer: {
    flex: 1,
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
