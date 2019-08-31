import React, {Component} from 'react';
import {View, Image, StyleSheet, Alert} from 'react-native';
import {Button, Text, Thumbnail} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {deleteMovieRating} from '../../../actions/movies/deleteMovieRatingActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomSpinner from '../../commonComponents/spinner/spinner';

class DeleteMovieRatingModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
    };
  }

  componentDidMount = () => {
    
  };

  deleteMovieRatings = () => {
    this.setState(
      {
        showLoader: true,
      },
      () => {
        let params = {
         movie_id: this.props.navigation.state.params.movie.id,
         session_id: this.props.navigation.state.params.session_id,
        };
        this.props.deleteMovieRating(params).then(res => {
          res.value.status_code == 13 || res.value.status_code == 1
            ? this.deleteRating('SUCCESS', 'Movie rating deleted.')
            : this.deleteRating('FAILED', 'Failed to delete movie rating!');
        });
      },
    );
  };

  deleteRating = (title, message) => {
    this.setState(
      {
        showLoader: !this.state.showLoader,
      },
      () => {
        Alert.alert(title, message,[
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
          <View style={styles.imgContainer}>
            <Thumbnail square source={require('../../../assets/img/delete.png')} />
          </View>
          {!this.props.deleteMovieRating.isDeleting && !this.state.showLoader && (
            <View style={styles.titleContainer}>
              <Text style={styles.txtMsg}>
               Rating will be deleted for this movie.
              </Text>
              <Text style={styles.movieTitle}>
                {this.props.navigation.state.params.movie.title}
              </Text>
            </View>
          )}
          {this.state.showLoader && (
            <View style={styles.titleContainer}>
              <CustomSpinner />
            </View>
          )}
          <View style={styles.btnContainer}>
            <Button
              disabled={this.props.deleteMovieRating.isDeleting}
              onPress={() => this.props.navigation.goBack()}
              rounded
              style={[styles.btnStyle, {marginRight: 10}]}>
              <Text style={styles.btnText}>Cancel</Text>
            </Button>
            <Button
              disabled={this.props.deleteMovieRating.isDeleting}
              onPress={() => {
                this.deleteMovieRatings();
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
    console.log(state)
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
        deleteMovieRating,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteMovieRatingModalScreen);
