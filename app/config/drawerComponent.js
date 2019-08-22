import React, {Component, Stylesheet, SafeAreaView} from 'react';
import {NavigationActions, StackActions} from 'react-navigation';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class DrawerComponentMenu extends React.PureComponent {
  _handleMenuPressed = route => {
    const resetAction = StackActions.reset({
      index: 0,
      key: route,
      actions: [NavigationActions.navigate({routeName: route})],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem
            icon
            onPress={() => {
              this._handleMenuPressed('Movies');
            }}>
            <Left>
              <Icon name="tv" size={17} />
            </Left>
            <Body>
              <Text>Trending Movies</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={() => {
              this._handleMenuPressed('Watchlist');
            }}>
            <Left>
              <Icon name="user-cog" size={17} />
            </Left>
            <Body>
              <Text>My Wacthlist</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
