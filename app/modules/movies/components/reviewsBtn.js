import React from 'react';
import {Text, Button, Icon} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const reviewsBtn = data => {
  return (
    <Button
      full
      style={{
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#E0E0E0',         
        marginLeft: 5,
        marginRight: 5,
      }}
      onPress={() => {
        data.nav.navigate('MovieReviews', {
          movie: data.movie,
        });
      }}>
      
      <Text style={{fontSize: hp('1.8%'),fontWeight: '500', color: '#000000'}}>Reviews</Text>
    </Button>
  );
};
