import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View,SafeAreaView,FlatList,Image,TouchableOpacity} from 'react-native';
import Animated, {useSharedValue,useAnimatedScrollHandler,useAnimatedRef,} from 'react-native-reanimated';
import {COLORS,DIMENSION} from '@constants/Helper'; 
import OnBordingItem from '@components/OnBording/OnBordingItem';
import OnBordingPagination from '@components/OnBording/OnBordingPagination';

import {useState,useRef} from 'react';

const OnBordingData = [
  {
    id :1,
    title:"Accept a job",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:require('../../assets/images/Character.png')
  },
  {
    id :2,
    title:"Tracking Realtime",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:require('../../assets/images/Character.png')
  },
  {
    id :3,
    title:"Earn Money",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:require('../../assets/images/Character.png')
  }
];

const OnBordingScreen = () => {
  
  const [slidIndex,setSlidIndex] = useState(0);
  const flatListRef = useAnimatedRef(null);
  const x = useSharedValue(0);
  const flatListIndex = useRef(null);
  
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });
  
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  
  const onViewableItemsChanged = ({
    viewableItems,
  }) => {
    if(viewableItems && viewableItems.length > 0){
      setSlidIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    { onViewableItemsChanged },
  ]);
  
  const changeNextSlider = (slidIndex) => {
    if (flatListRef.current) {
      const currentIndex = flatListRef.current.scrollToIndex({
        animated: true,
        index: (currentItemIndex + (slidIndex + 1)) % OnBordingData.length,
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <Animated.FlatList 
        ref={flatListRef}
        onScroll={onScroll}
        data={OnBordingData}
        renderItem={({item,index}) => {
          return <OnBordingItem item={item} index={index} x={x} />;
        }}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        initialScrollIndex={currentItemIndex}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => `list_item${index}`}
        viewabilityConfigCallbackPairs={
          viewabilityConfigCallbackPairs.current
        }
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      
      <OnBordingPagination 
      slidIndex={slidIndex} 
      OnBordingData={OnBordingData}
      changeNextSlider={changeNextSlider}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  }
});

export default OnBordingScreen;