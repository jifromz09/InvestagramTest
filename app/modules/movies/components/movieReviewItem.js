import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  ListItem,
  View,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
} from 'native-base';
import {toogleText} from '../../commonComponents/movies/textToogle';

export default class movieReviewItem extends React.PureComponent {
  render() {
    return (
      <ListItem style={styles.listItem}>
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../../../assets/img/avatar.png')} />
              <Body>
                <Text style={{fontWeight: '700'}}>
                  {this.props.data.author}
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>{toogleText(this.props.data.content)}</Body>
          </CardItem>
        </View>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    marginLeft: 0,
    paddingRight: 0,
    marginRight: 0,
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    borderBottomWidth: 1,
  },
});
