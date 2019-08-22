import React, {Component} from 'react';
import HeaderComp from '../commonComponents/header/header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Container,
  Content,
  List,
  Header,
  Tab,
  View,
  Icon,
  Thumbnail,
  Text
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import MovieReviewItem from './components/movieReviewItem';
import CustomSpinner from '../commonComponents/spinner/spinner';
// import { movies } from "../helpers/sortContacts";
import {fetchMovieReviews} from '../../actions/movies/movieReviews';
import {styles} from './helpers/styles';

class MovieReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  componentDidMount = () => {
    let {id} = this.props.navigation.state.params.movie;
    const params = {
      page: this.state.page,
      movie_id: id,
    };
    this.props.fetchMovieReviews(params);
  };

  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerBtnStyle}>
          <Icon
            ios="ios-arrow-back"
            android="md-arrow-back"
            style={styles.iconStyles}
          />
        </TouchableOpacity>
      ),
      headerTitle: <HeaderComp title={'Movie Reviews'} />,
      headerRight: <TouchableOpacity style={styles.headerBtnStyle} />,
    };
  };

  renderRow = data => {
    return <MovieReviewItem data={data} />;
  };

  render = () => {
    return (
      <Container>
        <Content contentContainerStyle={styles.containerStyle}>
          {this.props.movieReviews.isFetching && <CustomSpinner />}
          {!this.props.movieReviews.isFetching &&
            this.props.movieReviews.movieReviews.results.length > 0 && (
              <List
                dataArray={this.props.movieReviews.movieReviews.results}
                renderRow={this.renderRow}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
          {!this.props.movieReviews.isFetching &&
            this.props.movieReviews.movieReviews.results.length == 0 && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Thumbnail
                  square
                  large
                  source={require('../../assets/img/nocomment.png')}
                />
                <Text
                  style={{color: '#0091EA', marginTop: 10}}>
                  No Reviews
                </Text>
              </View>
            )}
        </Content>
      </Container>
    );
  };
}

function mapStateToProps(state) {
  console.log(state)
  return {
    movieReviews: state.movieReviews,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchMovieReviews,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieReviews);
