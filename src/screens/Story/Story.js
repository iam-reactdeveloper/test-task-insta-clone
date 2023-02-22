import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './StoryStyles';
import {storiesData} from '../../data/stories';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/colors';

const Story = () => {
  const [userStories, setUserStories] = useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const route = useRoute();
  const userId = route.params.userId;

  useEffect(() => {
    const userStories = storiesData.find(
      storyData => storyData.user.id === userId,
    );
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = evt => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories.stories || userStories.stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          source={{uri: activeStory?.imageUri}}
          style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories?.user?.imageUri} size={50} />
            <Text style={styles.userName}>{userStories?.user?.name}</Text>
            <Text style={styles.postedTime}>{activeStory?.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={colors.white} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={colors.white}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={colors.white}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Story;
