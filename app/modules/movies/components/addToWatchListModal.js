import React, {Component} from 'react';
import {View, Image, StyleSheet, Alert} from 'react-native';
import {Button, Text, Thumbnail} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {addToWatchlistRequest} from '../../../actions/watchList/addToWatchListAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomSpinner from '../../commonComponents/spinner/spinner';

class AddToWatchListModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
    };
  }

  componentDidMount = () => {
    
  };

  addToWatchlist = () => {
    this.setState(
      {
        showLoader: true,
      },
      () => {
        let params = {
          session_id: this.props.navigation.state.params.session_id,
          movie_id: this.props.navigation.state.params.movie.id,
          media_type: 'movie',
          isWatchlist: true,
        };
        this.props.addToWatchlistRequest(params).then(res => {
          res.value.status_code == 12 || res.value.status_code == 1
            ? this.addToWatchList('SUCCESS', 'Movie added to watchlist.')
            : this.addToWatchList('FAILED', 'Failed to add to watchlist!');
        });
      },
    );
  };

  addToWatchList = (title, message) => {
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
            <Thumbnail square source={require('../../../assets/img/eye.png')} />
          </View>
          {!this.props.addToWatchlist.isSaving && !this.state.showLoader && (
            <View style={styles.titleContainer}>
              <Text style={styles.txtMsg}>
                The following movie will be added to your watchlist
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
              disabled={this.props.addToWatchlist.isSaving}
              onPress={() => this.props.navigation.goBack()}
              block
              style={[styles.btnStyle, {marginRight: 10}]}>
              <Text style={styles.btnText}>Cancel</Text>
            </Button>
            <Button
              disabled={this.props.addToWatchlist.isSaving}
              onPress={() => {
                this.addToWatchlist();
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
    borderRadius: 20,
  },
});

function mapStateToProps(state) {
  return {
    addToWatchlist: state.addToWatchlist,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addToWatchlistRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddToWatchListModalScreen);
