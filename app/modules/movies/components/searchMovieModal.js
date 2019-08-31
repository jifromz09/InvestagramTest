import React, {Component} from 'react';
import {View, Image, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {Text, Icon, Form, Input, Item} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomSpinner from '../../commonComponents/spinner/spinner';
import {searchMovieRequest} from '../../../actions/movies/searchMovie';

class SearchMovieModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      year: null,
      keyword: null,
      page: 1,
    };
  }

  componentDidMount = () => {};

  searchMovie = () => {
    if (!this.state.keyword)
      return Alert.alert('INVALID SEARCH', 'Please input keyword!');
    this.setState(
      {
        showLoader: true,
      },
      () => {
        let params = {
          query: this.state.keyword,
          page: this.state.page,
          year: this.state.year,
        };
        this.props.searchMovieRequest(params).then(res => {
          res.value && res.value.results.length
            ? this.props.navigation.navigate('SearchResultList', {
                movies: res.value.results,
              })
            : this.searchMovieResult('SEARCH', 'No movie(s) found!');
        });
      },
    );
  };

  searchMovieResult = (title, message) => {
    this.setState(
      {
        keyword: null,
        year: null,
        showLoader: !this.state.showLoader,
      },
      () => {
        Alert.alert(title, message);
      },
    );
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.body}>
          {!this.props.movieSearch.isFetching && !this.state.showLoader && (
            <Form style={styles.titleContainer}>
              <Item style={styles.inputContainer}>
                <Input
                  placeholder="Movie title or Keyword"
                  onChangeText={text => {
                    this.setState({
                      keyword: text,
                    });
                  }}
                  style={styles.input}
                />
              </Item>
              <Item style={[{marginBottom: 10}, styles.inputContainer]} last >
                <Input
                  placeholder="Year"
                  keyboardType={'number-pad'}
                  onChangeText={text => {
                    this.setState({
                      year: text,
                    });
                  }}
                  style={styles.input}
                />
              </Item>
            </Form>
          )}
          {this.state.showLoader && (
            <View style={styles.titleContainer}>
              <CustomSpinner />
            </View>
          )}
          <View style={styles.btnContainer}>
            <TouchableOpacity
              disabled={this.props.movieSearch.isFetching}
              onPress={() => this.props.navigation.goBack()}
              style={[styles.btnStyle, {marginRight: 10}]}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={this.props.movieSearch.isFetching}
              onPress={() => {
                this.searchMovie();
              }}
              style={[styles.btnStyle, {marginLeft: 10}]}>
              <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyles: {
    fontSize: 25,
    color: '#0091EA',
  },
  txtMsg: {fontSize: 15, fontWeight: '500'},
  movieTitle: {fontSize: 18, fontWeight: '700', marginTop: 15},
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {fontSize: 15, fontWeight: '500', color: '#0091EA'},
  body: {
    borderRadius: 8,
    position: 'absolute',
    alignSelf: 'center',
    width: '95%',
    height: 200,
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  btnStyle: {
    width: '45%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    fontSize: 15,
  },
  inputContainer: {
    paddingLeft: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingRight: 5,
    paddingBottom: 0,
    marginBottom: 0,
    paddingTop: 0,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  console.log(state);
  return {
    movieSearch: state.movieSearch,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchMovieRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchMovieModalScreen);
