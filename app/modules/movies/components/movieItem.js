import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ListItem, Body, Icon, Left, CardItem, View, Right} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IMAGE_DEFAULT_URL} from '../../../const/const';
import {movieImg} from '../components/movieImg';
import {movieTitle} from '../components/movieTitle';
import {movieRating} from '../components/ratings';
import {movieTimeLength} from '../components/movieLength';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class MovieItem extends React.PureComponent {

  render() {
    return (
      <ListItem
        style={styles.listItem}
        onPress={() => {
          this.props.nav.navigate('MovieDetails', {movie: this.props.data});
        }}>
        <View style={styles.container}>
          <CardItem>
            <Left>
              {movieImg(this.props.data)}
              <Body>
                {movieTitle(this.props.data)}
                <View style={styles.releaseDatecontainer}>
                  <Text note style={styles.movieDetails}>
                    {this.props.data.release_date}
                  </Text>
                </View>
                {movieRating({data: this.props.data, readonly: true})}
              </Body>
              <Right>
                <Icon
                  ios="ios-arrow-forward"
                  android="ios-arrow-forward"
                  style={styles.iconStyles}
                />
              </Right>
            </Left>
          </CardItem>
        </View>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  releaseDatecontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconStyles: {
    fontSize: 25,
    color: '#0091EA',
    paddingLeft: 15,
  },
  imgStyle: {
    width: deviceWidth / 2.2,
    height: deviceHeight / 2.6,
    alignSelf: 'center',
    // aspectRatio: 1,
  },
  movieDetails: {
    fontWeight: '700',
    fontSize: hp('2%'),
  },
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
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
});
