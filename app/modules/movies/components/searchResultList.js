import React, {Component, PureComponent} from 'react';
import {
  Container,
  Content,
  List,
  Icon,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import MovieItem from './movieItem';
import {styles} from '../helpers/styles';
import MoviesHeader from './moviesheader';

export default class SearchResultList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount =() =>{
    
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.popToTop()}
          style={styles.headerBtnStyle}>
          <Icon
            ios="ios-arrow-back"
            android="md-arrow-back"
            style={styles.iconStyles}
          />
        </TouchableOpacity>
      ),
      headerTitle: <MoviesHeader title={'Search Result'} />,
      headerRight: <TouchableOpacity style={styles.headerBtnStyle} />,
    };
  };

  renderRow = data => {
    return <MovieItem data={data} nav={this.props.navigation} />;
  };

  movieList = () => {
    return (
      <List
        dataArray={this.props.navigation.state.params.movies}
        renderRow={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  render = () => {
    return (
      <Container>
        <Content contentContainerStyle={styles.containerStyle}>
          {this.movieList()}
        </Content>
      </Container>
    );
  };
}
