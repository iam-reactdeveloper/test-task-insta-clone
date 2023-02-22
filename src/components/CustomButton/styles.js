import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  button: verified => ({
    padding: moderateScale(10),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(5),
    width: '100%',
    backgroundColor: verified ? colors.instablue : colors.skyblue,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  textStyle: {
    color: colors.white,
  },
});
