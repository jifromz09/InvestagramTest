import React from 'react';
import {Text, Body} from 'native-base';
import {toogleText} from '../../commonComponents/movies/textToogle';
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
      {toogleText(data.overview)}
    </Body>
  );
};


