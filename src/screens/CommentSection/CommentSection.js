import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import {colors} from '../../utils/colors';

const CommentSection = ({route}) => {
  const {postId, user} = route?.params || {};
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState('');
  const [commentSending, setCommentSending] = useState(false);

  useEffect(() => {
    if (postId) {
      firestore()
        .collection('Posts')
        .doc(postId)
        .onSnapshot(res => {
          setPost(res.data());
          setComments(res.data().comments);
          setComment('');
          setCommentSending(false);
        });
    }
  }, [postId]);

  const onPressSend = () => {
    const commentsArray = post?.comments?.length ? [...post?.comments] : [];
    setCommentSending(true);
    const data = {
      name: user?.name,
      imageUri: 'https://picsum.photos/200/300',
      comment: comment,
    };
    commentsArray?.push(data);
    firestore()
      .collection('Posts')
      .doc(postId)
      .update({
        ...post,
        comments: [...commentsArray],
      })
      .then(() => {
        console.log('success');
        setComment('');
        setCommentSending(false);
      })
      .catch(e => {
        console.log('e', e);
        setCommentSending(false);
      });
  };
  const disabled = !comment?.trim()?.length || commentSending;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {comments?.map(item => {
          return (
            <View style={styles.commentView}>
              <Image
                source={{uri: item?.imageUri}}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.commentName}>{item?.name}</Text>
                <Text style={styles.commentText}>{item?.comment}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.enterComment}>
        <CustomInput
          value={comment}
          setValue={setComment}
          placeholder="Enter comment here"
          customStyle={styles.textInput}
        />
        <TouchableOpacity
          style={styles.iconView}
          onPress={onPressSend}
          disabled={disabled}>
          <FontAwesome
            name="send"
            size={23}
            color={!disabled ? colors.black : colors.grey}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CommentSection;
