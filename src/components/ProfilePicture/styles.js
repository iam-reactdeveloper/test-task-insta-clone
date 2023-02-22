import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(7),
    borderRadius: moderateScale(40),
    borderWidth: moderateScale(3),
    borderColor: colors.lightBlue,
  },
  image: {
    borderRadius: moderateScale(40),
    borderWidth: moderateScale(1),
    borderColor: colors.white,
  },
});

export default styles;
