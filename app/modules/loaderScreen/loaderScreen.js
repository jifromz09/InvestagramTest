import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {APIKey} from '../../auth/auth';
import {fetchRequestToken} from '../../actions/requestToken/requestTokenActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
 

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.loadingTimeOut = null;
  }

  componentDidMount = () => {
    // this.timeOut();
    this.props.fetchRequestToken();
  };

  gotoLogin = () => {
    if (
      !this.props.requestToken.isFetching &&
      this.props.requestToken.requestToken.success
    ) {
      this.props.navigation.navigate('Auth');
    }
  };

  componentWillMount = () => {
    // clearTimeout(this.loadingTimeOut);
  };

  //   // Fetch the token from storage then navigate to our appropriate place
  //   _bootstrapAsync = async () => {
  //     const userToken = await AsyncStorage.getItem('userToken');

  //     // This will switch to the App screen or Auth screen and this loading
  //     // screen will be unmounted and thrown away.
  //     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  //   };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar barStyle="default" />
        {this.props.requestToken.isFetching ? (
          <ActivityIndicator />
        ) : (
          this.gotoLogin()
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    requestToken: state.requestToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchRequestToken,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthLoadingScreen);
