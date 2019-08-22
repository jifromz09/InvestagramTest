import React from 'react';
import {Text, Button, Icon} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const addToWatchlistBtn = add => {
  return (
    <Button
      onPress={() => [add()]}
      full
      style={{
        backgroundColor: '#E0E0E0',     
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',   
        marginRight: 5,
        marginLeft: 5,
      }}>
     
      <Text style={{fontSize: hp('1.8%'), fontWeight: '500', color: '#000000'}}>Add to Watchlist</Text>
    </Button>
  );
};
