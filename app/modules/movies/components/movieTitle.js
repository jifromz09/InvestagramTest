import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {movieLength} from '../helpers/movieLength';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const movieTitle = data => {
  return (
    <View style={styles.container}>
      <Text ellipsizeMode={'tail'} numberOfLines={2} style={styles.title}>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: hp('2.4%'),
  },
});
