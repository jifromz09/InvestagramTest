import React from 'react';
import {Text, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewMoreText from 'react-native-view-more-text';
export const movieOverview = data => {
  return (
    <Body>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 15,
        }}>
        Overview
      </Text>
      <ViewMoreText
        numberOfLines={5}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
        textStyle={{textAlign: 'justify'}}>
        <Text>{data.overview}</Text>
      </ViewMoreText>
    </Body>
  );
};

const renderViewMore = onPress => {
  return (
    <Text style={{color: '#0091EA', marginTop: 10,  fontSize: 12}} onPress={onPress}>
      Read more...
    </Text>
  );
};
const renderViewLess = onPress => {
  return (
    <Text style={{color: '#0091EA', marginTop: 10,  fontSize: 12}} onPress={onPress}>
      Read less...
    </Text>
  );
};
