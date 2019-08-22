import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {ListItem, View, CardItem, Left, Body, Text} from 'native-base';
import ViewMoreText from 'react-native-view-more-text';
import {movieImg} from '../../movies/components/movieImg';
import {movieTitle} from '../../movies/components/movieTitle';
import {movieTimeLength} from '../../movies/components/movieLength';
import {movieRating} from '../../movies/components/ratings';

export default class WatchlistItem extends Component {
  constructor(props) {
    super(props);
  }

  renderViewMore(onPress) {
    return (
      <Text style={{color: '#0091EA', marginTop: 10}} onPress={onPress}>
        Read more...
      </Text>
    );
  }
  renderViewLess(onPress) {
    return (
      <Text style={{color: '#0091EA', marginTop: 10}} onPress={onPress}>
        Read less...
      </Text>
    );
  }

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
              <ViewMoreText
                numberOfLines={3}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
                textStyle={{textAlign: 'justify'}}>
                <Text>{this.props.data.overview}</Text>
              </ViewMoreText>
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
