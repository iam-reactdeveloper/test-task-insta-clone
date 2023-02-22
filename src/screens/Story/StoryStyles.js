import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  userName: {
    color: colors.white,
    fontWeight: '700',
    fontSize: moderateScale(16),
  },
  postedTime: {
    marginLeft: moderateScale(10),
    fontWeight: '700',
    color: colors.brown,
    fontSize: moderateScale(16),
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: moderateScale(20),
    marginHorizontal: moderateScale(10),
  },
  cameraButton: {
    width: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: moderateScale(1),
    borderColor: colors.white,
    borderRadius: moderateScale(50),
  },
  messageButton: {
    width: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: '100%',
    color: colors.white,
    fontSize: moderateScale(16),
  },
  textInputContainer: {
    flex: 1,
    borderWidth: moderateScale(1),
    borderColor: colors.white,
    marginHorizontal: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(50),
    height: moderateScale(50),
  },
});

export default styles;
