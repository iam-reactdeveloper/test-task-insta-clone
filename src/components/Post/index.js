import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post}) => (
  <View>
    <Header
      imageUri={
        post?.user?.imageUri
          ? post?.user?.imageUri
          : 'https://s.clipartkey.com/mpngs/s/151-1515360_transparent-profile-clipart-male-user-icon.png'
      }
      name={post?.user?.name}
    />
    <Body imageUri={post?.imageUri} />
    <Footer
      likesCount={post?.likesCount}
      caption={post?.caption}
      postedAt={post?.createdAt}
      post={post}
    />
  </View>
);

export default Post;
