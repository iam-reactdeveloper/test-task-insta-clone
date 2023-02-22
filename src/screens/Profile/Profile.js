import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import CustomButton from '../../components/CustomButton/CustomButton';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {loginUserAction, logoutUserAction} from '../../redux/slices/loginSlice';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const Profile = () => {
  const [image, setImage] = useState(false);
  const dispatch = useDispatch();
  const {user} = useSelector(state => state?.loginSlice);

  useEffect(() => {
    if (user?.profilePic) {
      setImage(user?.profilePic);
    }
  }, [user]);

  const selectImage = () => {
    ImageCropPicker.openPicker({
      mediaType: 'photo',
      height: 512,
      width: 512,
      cropping: true,
    })
      .then(_image => {
        let uri = _image.path;
        let result = '';
        for (let i = 0; i < 20; i++) {
          const random = Math.floor(Math.random() * 27);
          result += String.fromCharCode(97 + random);
        }
        const reference = storage().ref('/' + result);
        reference.putFile(uri).then(() => {
          reference
            .getDownloadURL()
            .then(url => {
              firestore()
                .collection('Users')
                .doc(user?.uid)
                ?.update({
                  profilePic: url,
                })
                .then(() => {
                  setImage(url);
                  dispatch(
                    loginUserAction({
                      ...user,
                      profilePic: url,
                    }),
                  );
                })
                .catch(e => console.log('Image upload error', e));
            })
            .catch(e => console.log('e', e));
        });
      })
      .catch(e => {});
  };

  const logoutFunction = () => {
    auth()
      .signOut()
      .then(() => dispatch(logoutUserAction()));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <TouchableOpacity style={styles.imageButton} onPress={selectImage}>
            <Image
              source={{
                uri: image
                  ? image
                  : 'https://s.clipartkey.com/mpngs/s/151-1515360_transparent-profile-clipart-male-user-icon.png',
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.imageText}>
            Click on image to change profile picture
          </Text>
        </View>
        <CustomButton
          value={'Logout'}
          verified={true}
          customStyle={styles.logoutButton}
          onPress={logoutFunction}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
