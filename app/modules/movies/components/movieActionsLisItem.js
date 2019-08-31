import React from 'react';
import {Text, Button, Icon, ListItem, Left, Right} from 'native-base';

export const movieListItem = data => {
  return (
    <ListItem
      style={{
        paddingLeft: 0,
        marginLeft: 0,
        borderColor: '#BDBDBD',
        borderBottomWidth: data.title === 'Movie Reviews' ? 0 : 0.5,
      }}
      onPress={() => data.do()}>
      <Left>
        <Text style={{color: '#0091EA', marginLeft: 10 }}>{data.title}</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" style={{color: '#0091EA'}} />
      </Right>
    </ListItem>
  );
};
