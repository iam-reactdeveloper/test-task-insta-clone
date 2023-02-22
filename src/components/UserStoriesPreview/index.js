import React from 'react';
import {FlatList} from 'react-native';
import Story from '../UserStoryPreview';
import {storiesData} from '../../data/stories';

import styles from './styles';

const Stories = () => {
  return (
    <FlatList
      data={storiesData}
      keyExtractor={({user}) => user.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => <Story story={item} />}
    />
  );
};

export default Stories;
