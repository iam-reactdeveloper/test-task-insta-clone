import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {colors} from '../../../../utils/colors';

const Footer = ({likesCount: likesCountProp, caption, postedAt, post}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const {user} = useSelector(state => state?.loginSlice);
  const navigation = useNavigation();
  const onLikePressed = () => {
    const likes = post?.likes?.length ? [...post?.likes] : [];
    if (isLiked) {
      const index = likes?.findIndex(i => i === user?.uid);
      likes?.splice(index, 1);
    } else {
      likes?.push(user?.uid);
    }
    firestore()
      .collection('Posts')
      .doc(post?.id)
      .update({
        ...post,
        likes: [...likes],
        likesCount: likes.length,
      })
      .then(() => console.log('success'))
      .catch(e => console.log('e', e));
  };
  useEffect(() => {
    setLikesCount(likesCountProp);
    if (post?.likes?.find(i => i === user?.uid)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [post?.likes, likesCountProp, user?.uid]);
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <ADIcon name="heart" size={25} color={colors.lightOrange} />
            ) : (
              <ADIcon name="hearto" size={25} color={colors.darkGrey} />
            )}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('CommentSection', {
                postId: post?.id,
                user: user,
              });
            }}>
            <FontistoIcon name="comment" size={23} color={colors.darkGrey} />
          </TouchableWithoutFeedback>
          <IoniconsIcon
            name="paper-plane-outline"
            size={25}
            color={colors.darkGrey}
          />
        </View>
        <FAIcon name="bookmark-o" size={25} color={colors.darkGrey} />
      </View>

      <Text style={styles.likes}>{likesCount} Likes</Text>
      {caption?.length ? <Text style={styles.caption}>{caption}</Text> : null}
      <Text style={styles.postedAt}>{moment(postedAt).fromNow()}</Text>
    </View>
  );
};

export default Footer;
