import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  imageView: {
    alignItems: 'center',
    height: '90%',
    justifyContent: 'center',
  },
  imageButton: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100),
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100),
  },
  imageText: {color: colors.black, marginTop: moderateScale(10)},
  logoutButton: {width: '90%', alignSelf: 'center'},
});
