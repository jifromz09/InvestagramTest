import React from 'react';
import {Text, Button, Icon} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const deleteRatingBtn = del => {
  return (
    <Button     
    onPress={() => [del()]}
      full
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        backgroundColor: '#E0E0E0',        
        marginRight: 5,
        marginLeft: 5,
      }}>
      
      <Text style={{fontSize: hp('1.8%'),fontWeight: '500', color: '#000000'}}>Delete Rating</Text>
    </Button>
  );
};
