import React, {Component} from 'react';
import {View, Image, StyleSheet, Alert} from 'react-native';
import {Button, Text, Icon, Form, Input, Item} from 'native-base';
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
    if(!this.state.keyword) return Alert.alert('INVALID SEARCH', 'Please input keyword!');
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
          console.log(res);
          res.value && res.value.results.length
            ? this.props.navigation.navigate('SearchResultList', {movies: res.value.results})
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
          <View style={styles.imgContainer}>
            <Icon
              ios="ios-search"
              android="md-search"
              style={styles.iconStyles}
            />
          </View>
          {!this.props.movieSearch.isFetching && !this.state.showLoader && (
            <Form style={styles.titleContainer}>
              <Item
                style={{
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
                }}>
                <Input
                  placeholder="Keyword"
                  onChangeText={text => {
                    this.setState({
                      keyword: text,
                    });
                  }}
                />
              </Item>
              <Item
                style={{
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
                  marginBottom: 10,
                }}
                last>
                <Input
                  placeholder="Year"
                  keyboardType={'number-pad'}
                  onChangeText={text => {
                    this.setState({
                      year: text,
                    });
                  }}
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
            <Button
              disabled={this.props.movieSearch.isFetching}
              onPress={() => this.props.navigation.goBack()}
              block
              style={[styles.btnStyle, {marginRight: 10}]}>
              <Text style={styles.btnText}>Cancel</Text>
            </Button>
            <Button
              disabled={this.props.movieSearch.isFetching}
              onPress={() => {
                this.searchMovie();
              }}
              block
              style={[styles.btnStyle, {marginLeft: 10}]}>
              <Text style={styles.btnText}>Continue</Text>
            </Button>
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
  },
  btnText: {fontSize: hp('1.8%')},
  body: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 0.6,
    justifyContent: 'flex-end',
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
    backgroundColor: '#0091EA',
    width: '45%',
    height: 40,
    borderRadius: 20,
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
