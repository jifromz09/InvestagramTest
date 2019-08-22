import React from 'react';
import {Text, Button, Icon} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const rateMovieBtn = add => {
  return (
    <Button
      onPress={() => [add()]}
      full
      style={{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        backgroundColor: '#E0E0E0',
        marginRight: 5,
        marginLeft: 5,
      }}>
      <Text style={{fontSize: hp('1.8%'), fontWeight: '500', color: '#000000'}}>
        Add Rating
      </Text>
    </Button>
  );
};
