import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentView: {
    flexDirection: 'row',
    padding: moderateScale(10),
    alignItems: 'center',
    borderWidth: moderateScale(1),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(5),
  },
  commentName: {
    color: colors.black,
    fontWeight: 'bold',
  },
  commentText: {
    color: colors.black,
  },
  enterComment: {
    margin: moderateScale(10),
    flexDirection: 'row',
  },
  iconView: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(100),
    marginRight: moderateScale(10),
  },
  textInput: {
    width: '90%',
  },
});
