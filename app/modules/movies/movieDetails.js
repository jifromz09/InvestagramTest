import React, {Component} from 'react';
import HeaderComp from '../commonComponents/header/header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Container,
  Content,
  CardItem,
  ListItem,
  Icon,
  List,
  Left,
  Body,
  View,
  Button,
  Text,
  Right,
} from 'native-base';
import {TouchableOpacity, Alert} from 'react-native';
import CustomSpinner from '../commonComponents/spinner/spinner';
import {fetchMovieDetails} from '../../actions/movies/movieDetailsActions';
import {styles} from './helpers/styles';
import {movieTitle} from './components/movieTitle';
import {movieImg} from './components/movieImg';
import {movieOverview} from './components/movieOverview';
import {movieGenres} from './components/genres';
import {movieRating} from './components/ratings';
import {movieTimeLength} from './components/movieLength';
import {movieListItem} from './components/movieActionsLisItem';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true,
    };
  }

  componentDidMount = () => {
    let {id} = this.props.navigation.state.params.movie;
    this.props.fetchMovieDetails(id).then(res => {
      this.setState({
        showSpinner: false,
      });
    });
  };

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.headerBtnStyle}>
          <Icon
            ios="ios-arrow-back"
            android="md-arrow-back"
            style={styles.iconStyles}
          />
        </TouchableOpacity>
      ),
      headerTitle: <HeaderComp title={'Movie Details'} showSearch={false} />,
      headerRight: <TouchableOpacity style={styles.headerBtnStyle} />,
    };
  };

  rateMovie = () => {
    this.props.navigation.navigate('AddMovieRatingModal', {
      movie: this.props.movieDetails.movieDetails,
      session_id: this.props.createSessionId.session.session_id,
    });
  };

  addToWatchList = () => {
    this.props.navigation.navigate('AddToWatchListModalScreen', {
      movie: this.props.movieDetails.movieDetails,
      session_id: this.props.createSessionId.session.session_id,
    });
  };

  deleteMovieRating = () => {
    this.props.navigation.navigate('DeleteMovieRating', {
      movie: this.props.movieDetails.movieDetails,
      session_id: this.props.createSessionId.session.session_id,
    });
  };

  navigateToReviews = () => {
    this.props.navigation.navigate('MovieReviews', {
      movie: this.props.movieDetails.movieDetails,
    });
  };

  render = () => {
    return (
      <Container>
        <Content
          scrollEnabled={true}
          contentContainerStyle={styles.containerStyle}>
          {this.state.showSpinner && <CustomSpinner />}
          {!this.state.showSpinner && (
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 2,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingTop: 10,
                }}>
                <CardItem>
                  <Left>
                    {movieImg(this.props.movieDetails.movieDetails)}
                    <Body>
                      {movieTitle(this.props.movieDetails.movieDetails)}
                      {movieTimeLength(this.props.movieDetails.movieDetails)}
                      {movieRating({
                        data: this.props.movieDetails.movieDetails,
                        readonly: false,
                      })}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  {movieOverview(this.props.movieDetails.movieDetails)}
                </CardItem>
                <CardItem>
                  {movieGenres(this.props.movieDetails.movieDetails)}
                </CardItem>
              </View>
              <List
                style={styles.actionlistStyles}>
                {movieListItem({do: this.rateMovie, title: 'Rate Movie'})}
                {movieListItem({
                  do: this.addToWatchList,
                  title: 'Add to Watchlist',
                })}
                {movieListItem({
                  do: this.deleteMovieRating,
                  title: 'Delete Rating',
                })}
                {movieListItem({
                  do: this.navigateToReviews,
                  title: 'Movie Reviews',
                })}
              </List>
            </View>
          )}
        </Content>
      </Container>
    );
  };
}

function mapStateToProps(state) {
  return {
    movieDetails: state.movieDetails,
    createSessionId: state.createSessionId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchMovieDetails,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails);
