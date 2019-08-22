import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const movieRating = data => {
  return (
    <View style={styles.ratingContainer}>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={25}
        startingValue={data.data.vote_average / 2}
        readonly={data.readonly}
        // showRating={true}
        //  fractions={1}
      />
      <Text style={styles.votes}>Rating: ({data.data.vote_average } / 10) Votes: ({data.data.vote_count ? data.data.vote_count : 0})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  votes: {fontSize: hp('1.9%')},
});
