/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Post from '../Post';
import Stories from '../UserStoriesPreview';
import firestore from '@react-native-firebase/firestore';
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore()
      .collection('Posts')
      .onSnapshot(snap => {
        const data = [];
        snap.docs.forEach(item => {
          if (posts?.find(i => i?.imageUri !== item?.data()?.imageUri)) {
            data.push({...item?.data(), id: item.id});
          } else if (!posts.length) {
            data.push({...item.data(), id: item.id});
          }
        });
        setPosts([...posts, ...data]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={styles.stories}>
        <Stories />
      </View>
      {posts?.length ? (
        <FlatList
          data={posts}
          renderItem={({item}) => <Post post={item} />}
          keyExtractor={({id}) => id}
          ListFooterComponent={() => <View style={styles.flatlistFooter} />}
        />
      ) : (
        <View style={styles.container}>
          <Text>No Posts found</Text>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  stories: {
    height: '20%',
  },
  flatlistFooter: {paddingBottom: 150},
});
export default Feed;
