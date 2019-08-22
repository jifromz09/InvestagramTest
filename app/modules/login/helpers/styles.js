import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7
  },
  formItem: {
    width: '95%',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderLeftWidth: 1.5,
    //borderColor: "#039BE5"
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp('60%'),
    height: hp('30%'),
  },
  logoContiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: '#039BE5',
  },
  loginBtn: {
    marginTop: 10,
    width: '95%',
    alignSelf: 'center',
    //backgroundColor: "#039BE5",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {color: '#fff', fontSize: hp('2.5%'), fontWeight: '600'},
  checkBoxConteiner: {
    width: '95%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 5,
    borderColor: '#ffffff',
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
