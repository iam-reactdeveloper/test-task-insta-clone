import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View, Image} from 'react-native';
import styles from './CreatePostStyle';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton/CustomButton';
import moment from 'moment';

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [posting, setPosting] = useState(false);
  const {user} = useSelector(state => state?.loginSlice);

  const addPost = () => {
    if (!image) {
      ImagePicker.openPicker({
        mediaType: 'photo',
        height: 512,
        width: 512,
        cropping: true,
      })
        .then(_image => {
          let uri = _image.path;
          setImage(uri);
        })
        .catch(e => {});
    } else {
      let result = '';
      for (let i = 0; i < 20; i++) {
        const random = Math.floor(Math.random() * 27);
        result += String.fromCharCode(97 + random);
      }
      setPosting(true);
      const reference = storage().ref('/' + result);
      reference
        .putFile(image)
        .then(() => {
          reference
            .getDownloadURL()
            .then(url => {
              console.log(url);
              firestore()
                .collection('Posts')
                .add({
                  user: {
                    imageUri: user?.profilePic ? user?.profilePic : '',
                    name: user?.name,
                  },
                  imageUri: url,
                  caption: caption,
                  likesCount: 0,
                  createdAt: moment().toISOString(),
                })
                .then(() => {
                  setPosting(false);
                  setImage(null);
                  setCaption('');
                })
                .catch(e => {
                  console.log('firestore error', e);
                  setImage(null);
                  setCaption('');
                  setPosting(false);
                });
            })
            .catch(e => {
              console.log('url error', e);
              setPosting(false);
            });
        })
        .catch(e => {
          console.log('image upload error', e);
          setPosting(false);
        });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {image ? (
        <View style={styles.imageCaptionContainer}>
          <Image
            style={styles.postImage}
            source={{uri: image}}
            resizeMode={'contain'}
          />
          <View style={styles.captionContaineer}>
            <TextInput
              value={caption}
              placeholder={'write a caption ...'}
              style={styles.captionInput}
              onChangeText={text => setCaption(text)}
            />
          </View>
        </View>
      ) : (
        <Text style={styles.sampleText}>What's in your mind ?</Text>
      )}
      <CustomButton
        value={image ? 'Create Post' : 'Add Post'}
        onPress={addPost}
        verified={!posting}
        customStyle={styles.customButton}
        loading={posting}
      />
      {image && !posting ? (
        <CustomButton
          value={'Cancel'}
          onPress={() => {
            setImage(null);
            setCaption('');
          }}
          verified={true}
          customStyle={styles.cancelButton}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default CreatePost;
