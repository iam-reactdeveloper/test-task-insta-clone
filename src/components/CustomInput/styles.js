import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  textInput: {
    padding: moderateScale(10),
    borderWidth: moderateScale(1),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(5),
    borderColor: colors.black,
    width: '100%',
    color: colors.black,
  },
});
