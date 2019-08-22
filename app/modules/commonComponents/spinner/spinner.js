import React, {Component} from 'react';
import {Text, View, Spinner} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
 

export default (spinner = ({title}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContente: 'center'}}>
      <Spinner color={'blue'} />
    </View>
    // <Image
    //   source={require('../../assets/images/jiffordpix.jpg')}
    //   style={{marginLeft: 10,  width: 35, height: 35, }}
    // />
  );
});
