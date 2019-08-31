import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  actionlistStyles: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    marginBottom: 10,
  },
  iconStyles: {
    fontSize: 30,
    color: '#0091EA',
    paddingLeft: 15,
  },
  input: {fontSize: hp('1.8%'), flex: 2},
  leftHeaderIconStyle: {
    fontSize: hp('1.8%'),
    color: '#0091EA',
    fontWeight: '500',
    marginLeft: 5,
  },
  headerBtnStyle: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemStyle: {
    backgroundColor: '#EEEEEE',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerBtnStyle: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: deviceWidth / 4,
    height: deviceHeight / 5,
    borderRadius: 5,
    // aspectRatio: 1,
  },
  btnContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    // backgroundColor: 'red',
    paddingTop: 5,
    marginBottom: 10,
  },
  containerStyle: {backgroundColor: '#ffffff'},
});
