import React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import {Text} from 'native-base';

export const toogleText = text => {
  return (
    <ViewMoreText
      numberOfLines={4}
      renderViewMore={renderViewMore}
      renderViewLess={renderViewLess}
      textStyle={{textAlign: 'justify'}}>
      <Text>{text}</Text>
    </ViewMoreText>
  );
};

const renderViewMore = onPress => {
  return (
    <Text
      style={{color: '#0091EA', marginTop: 10, fontSize: 12}}
      onPress={onPress}>
      Read more...
    </Text>
  );
};
const renderViewLess = onPress => {
  return (
    <Text
      style={{color: '#0091EA', marginTop: 10, fontSize: 12}}
      onPress={onPress}>
      Read less...
    </Text>
  );
};
