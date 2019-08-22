import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {ListItem, View, CardItem, Left, Body, Text} from 'native-base';
import {movieImg} from '../../movies/components/movieImg';
import {movieTitle} from '../../movies/components/movieTitle';
import {movieRating} from '../../movies/components/ratings';
import { toogleText } from '../../commonComponents/movies/textToogle';

export default class WatchlistItem extends React.PureComponent {
    render() {
    return (
      <ListItem style={styles.listItem}>
        <View style={styles.container}>
          <CardItem>
            <Left>
              {movieImg(this.props.data)}
              <Body>
                {movieTitle(this.props.data)}
                {movieRating({data: this.props.data, readonly: true})}
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              {toogleText(this.props.data.overview)}
            </Body>
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
    // borderBottomWidth: 0
  },
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
});
