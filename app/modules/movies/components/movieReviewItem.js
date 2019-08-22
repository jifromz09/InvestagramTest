import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {
  Text,
  ListItem,
  View,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Icon,
  Button,
} from 'native-base';
import ViewMoreText from 'react-native-view-more-text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class movieReviewItem extends Component {
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
            <Body>
              <ViewMoreText
                numberOfLines={4}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
                textStyle={{textAlign: 'justify'}}>
                <Text>{this.props.data.content}</Text>
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
    borderBottomWidth: 1,
  },
});
