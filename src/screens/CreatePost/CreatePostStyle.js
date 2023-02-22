import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  imageCaptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  customButton: {width: '50%', alignSelf: 'center'},
  cancelButton: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: colors.red,
  },
  postImage: {
    width: moderateScale(120),
    height: moderateScale(120),
    marginLeft: moderateScale(15),
  },

  sampleText: {
    fontWeight: 'bold',
    margin: moderateScale(3),
    alignSelf: 'center',
  },

  captionContaineer: {
    width: '60%',
    borderBottomWidth: moderateScale(0.5),
    borderRadius: moderateScale(5),
    marginTop: moderateScale(1),
    borderColor: colors.grey,
    marginRight: moderateScale(15),
  },

  captionInput: {height: moderateScale(40), padding: moderateScale(5)},
});

export default styles;
