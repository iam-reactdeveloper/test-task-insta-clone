import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/colors';
import {moderateScale} from '../../../../utils/helper';

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(5),
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(5),
  },
  leftIcons: {
    flexDirection: 'row',
    width: moderateScale(120),
    justifyContent: 'space-between',
  },
  likes: {
    fontWeight: 'bold',
    margin: moderateScale(3),
    color: colors.black,
  },
  caption: {
    margin: moderateScale(3),
    color: colors.black,
  },
  postedAt: {
    color: colors.lightBrown,
    margin: moderateScale(3),
  },
});

export default styles;
