import React, {Component} from 'react';
import {View, Image, StyleSheet, Alert} from 'react-native';
import {Button, Text, Thumbnail} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {rateMovie} from '../../../actions/movies/postMovieRatingActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomSpinner from '../../commonComponents/spinner/spinner';
import {Rating, AirbnbRating} from 'react-native-ratings';

class AddRatingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      startingValue: 3,
      reviews: null,
    };
  }

  componentDidMount = () => {};

  addRating = () => {
    this.setState(
      {
        showLoader: true,
      },
      () => {
        let params = {
          session_id: this.props.navigation.state.params.session_id,
          movie_id: this.props.navigation.state.params.movie.id,
          bodyValue: this.state.startingValue,
        };
        this.props.rateMovie(params).then(res => {
          res.value.status_code == 12 || res.value.status_code == 1
            ? this.addRatingResult('SUCCESS', 'Movie rating success.')
            : this.addRatingResult('FAILED', 'Failed to rate movie!');
        });
      },
    );
  };

  addRatingResult = (title, message) => {
    this.setState(
      {
        showLoader: !this.state.showLoader,
      },
      () => {
        Alert.alert(title, message, [
          {
            text: 'OK',
            onPress: () => {
              this.props.navigation.pop();
            },
          },
        ]);
      },
    );
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.body}>
          <Text style={styles.movieTitle}>Add Movie Rating</Text>
          {!this.props.addRating.isSaving && !this.state.showLoader && (
            <View style={styles.titleContainer}>
              <AirbnbRating
                type="star"
                ratingCount={5}
                size={25}
                showRating
                reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}               
                onFinishRating={value => {
                  console.log(value);
                  this.setState({
                    startingValue: value,
                  });
                }}
              />
            </View>
          )}
          {this.state.showLoader && (
            <View style={styles.titleContainer}>
              <CustomSpinner />
            </View>
          )}
          <View style={styles.btnContainer}>
            <Button
              disabled={this.props.addRating.isSaving}
              onPress={() => this.props.navigation.goBack()}
              rounded
              style={[styles.btnStyle, {marginRight: 10}]}>
              <Text style={styles.btnText}>Cancel</Text>
            </Button>
            <Button
              disabled={this.props.addRating.isSaving}
              onPress={() => {
                this.addRating();
              }}
              rounded
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
  votes: {fontSize: hp('1.9%')},
  txtMsg: {fontSize: 15, fontWeight: '500'},
  movieTitle: {fontSize: 15, fontWeight: 'bold', marginTop: 10},
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
    height: hp('30%'),
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
    justifyContent: 'center'
  },
});

function mapStateToProps(state) {
  return {
    addRating: state.addRating,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      rateMovie,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddRatingModal);
