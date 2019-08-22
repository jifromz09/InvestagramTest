import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Alert,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Input, Item, Icon, Button, Toast, Root, Spinner} from 'native-base';
import {fetchRequestToken} from '../../actions/requestToken/requestTokenActions';
import {requestSessionIdRequest} from '../../actions/createSession/createSessionIdActions';
import {userLogin} from '../../actions/login/loginActions';
import {styles} from './helpers/styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      password: 'jifromz',
      username: 'jifromz',
    };
  }

  userAuth = () => {
    const param = {
      uname: this.state.username,
      pword: this.state.password,
      requestToken: this.props.requestToken.requestToken.request_token,
    };

    if (!param.uname) {
      return Alert.alert('User Login', 'Please input username.');
    }

    if (!param.pword) {
      return Alert.alert('User Login', 'Please input password.');
    }
    
    this.props.userLogin(param).then(res => {
      res.value && res.value.success
        ? this.createSession()
        : this.loginFailed();
    });
  };

  createSession = () => {
    let req_token = this.props.requestToken.requestToken.request_token;
    this.props.requestSessionIdRequest(req_token).then(res => {
      res.value && res.value.success
        ? this.props.navigation.navigate('AppStack')
        : this.loginFailed();
    });
  };

  loginFailed = () => {
    Alert.alert('User Login', 'Invalid username or password!');
  };

  componentDidMount = () => {
    this.props.fetchRequestToken();
  };

  render = () => {
    return (
      <Root>
        <SafeAreaView style={styles.mainContainer}>
          {/* <View style={styles.logoContiner}>
            <Image
              source={require("../../assets/images/logo/logo.png")}
              style={styles.logo}
            />
          </View> */}
          {this.props.requestToken.isFetching ? (
            <View style={styles.spinnerContainer}>
              <Spinner color={'#039BE5'} />
            </View>
          ) : (
            <View style={styles.formContainer}>
              <Item regular style={[styles.formItem, {marginBottom: 5}]}>
                <Icon
                  ios="ios-person"
                  android="md-person"
                  style={styles.icon}
                />
                <Input
                  placeholder="Username"
                  value={this.state.username}
                  onChangeText={text =>
                    this.setState({
                      username: text,
                    })
                  }
                />
              </Item>
              <Item regular style={styles.formItem}>
                <Icon ios="ios-lock" android="md-lock" style={styles.icon} />
                <Input
                  placeholder="Password"
                  secureTextEntry={this.state.hidePassword}
                  value={this.state.password}
                  onChangeText={text =>
                    this.setState({
                      password: text,
                    })
                  }
                />
              </Item>
              <Button primary style={styles.loginBtn} onPress={this.userAuth}>
                <Text style={styles.loginText}>Login</Text>
              </Button>
            </View>
          )}
        </SafeAreaView>
      </Root>
    );
  };
}

const mapStateToProps = state => {
  return {
    requestToken: state.requestToken,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchRequestToken: fetchRequestToken,
      userLogin: userLogin,
      requestSessionIdRequest: requestSessionIdRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
