import React, {Component} from 'react';
import {Text, View} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class MoviesHeader extends React.PureComponent {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContente: 'center'}}>
        <Text
          style={{fontSize: hp('2.5%'), fontWeight: '700', color: '#0091EA'}}>
          {this.props.title}
        </Text>
      </View>
      // <Image
      //   source={require('../../assets/images/jiffordpix.jpg')}
      //   style={{marginLeft: 10,  width: 35, height: 35, }}
      // />
    );
  }
}
