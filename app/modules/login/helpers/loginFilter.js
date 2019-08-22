import {Alert} from 'react-native';

export function loginFilter(param) {
  if (!param.uname) {
    return Alert.alert('User Login', 'Please input username.');
  }

  if (!param.pword) {
    return Alert.alert('User Login', 'Please input password.');
  }
}
