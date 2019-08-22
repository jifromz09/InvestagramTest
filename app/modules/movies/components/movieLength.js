import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {movieLength} from '../helpers/movieLength';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const movieTimeLength = data => {
  return (
    <View style={styles.container}>
      <Text note style={styles.movieDetails}>
        {data.release_date}
        {'\n'}
        {movieLength(data.runtime).hr.value}{' '}
        {movieLength(data.runtime).hr.label}{' '}
        {movieLength(data.runtime).min.value}{' '}
        {movieLength(data.runtime).min.label}
      </Text>
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
  movieDetails: {
    fontWeight: '700',
    fontSize: hp('1.9%'),
  },
});
