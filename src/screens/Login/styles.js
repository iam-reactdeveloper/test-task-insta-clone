import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {width: moderateScale(180), height: moderateScale(50)},
  inputView: {
    width: '80%',
  },
  footerText: {
    marginTop: moderateScale(10),
    color: colors.black,
  },
  signupText: {
    color: colors.blue,
  },
});
