import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/colors';
import {moderateScale} from '../../../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    marginRight: moderateScale(15),
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors.darkBrown,
  },
});

export default styles;
