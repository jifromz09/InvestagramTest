import React, {Component} from 'react';
import HeaderComp from '../commonComponents/header/header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Container,
  Content,
  List,
  Tab,
  Tabs,
  Input,
  Icon,
  View,
  Item,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import MovieItem from './components/movieItem';
import CustomSpinner from '../commonComponents/spinner/spinner';
import {fetchTrendingMovies} from '../../actions/movies/moviesActions';
import {styles} from '../movies/helpers/styles';
import MoviesHeader from './components/moviesheader';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media_type: 'movie',
      activeTab: null,
      showSearch: false,
    };
    this.showSpinner = true;
  }

  componentDidMount = () => {
    this.fetchMovies(0);
    this.props.navigation.setParams({
      showSearchBarFunc: this.showSearchBarFunc,
    });
  };

  showSearchBarFunc = () => {
    console.log('triggerd');
    this.setState({
      showSearch: !this.state.showSearch,
    });
  };

  fetchMovies = tabIndex => {
    if (this.state.activeTab != tabIndex) {
      this.showSpinner = !this.showSpinner;
      this.setState(
        {
          activeTab: tabIndex,
        },
        () => {
          const params = {
            media_type: this.state.media_type,
            time_window: 'day',
          };
          if (tabIndex == 1) {
            params.time_window = 'week';
          }
          this.props.fetchTrendingMovies(params).then(res => {
            this.showSpinner = !this.showSpinner;
          });
        },
      );
    }
  };

  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.headerBtnStyle}>
          <Icon ios="ios-menu" android="md-menu" style={styles.iconStyles} />
        </TouchableOpacity>
      ),
      headerTitle: <MoviesHeader title={'Trending Movies'} />,
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchMovieModalScreen')}
          style={styles.headerBtnStyle}>
          <Icon
            ios="ios-serch"
            android="md-search"
            style={[styles.iconStyles, {paddingLeft: 10, paddingRight: 15}]}
          />
        </TouchableOpacity>
      ),
    };
  };

  renderRow = data => {
    return <MovieItem data={data} nav={this.props.navigation} />;
  };

  movieList = () => {
    return (
      <List
        dataArray={this.props.movies.trendingMovies.results}
        renderRow={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  returnSpinner = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CustomSpinner />
      </View>
    );
  };

  render = () => {
    return (
      <Container>
        <Content contentContainerStyle={styles.containerStyle}>
          <Tabs onChangeTab={tab => this.fetchMovies(tab.i)} locked={true}>
            <Tab heading="Daily">
              {this.showSpinner ? this.returnSpinner() : this.movieList()}
            </Tab>
            <Tab heading="Weekly">
              {this.showSpinner ? this.returnSpinner() : this.movieList()}
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  };
}

function mapStateToProps(state) {
  return {
    movies: state.trendingMovies,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchTrendingMovies,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
