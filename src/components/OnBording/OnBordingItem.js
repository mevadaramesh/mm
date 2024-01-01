import { StyleSheet,Text,View,Image} from 'react-native';
import Animated, {useAnimatedStyle,interpolate,Extrapolate} from 'react-native-reanimated';
import {useState,useRef,useEffect} from 'react';
import {COLORS,DIMENSION} from '@constants/Helper'; 

const OnBordingItem = ({item, index,x}) => {
  
  const imageAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * DIMENSION.width,
          index * DIMENSION.width,
          (index + 1) * DIMENSION.width,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * DIMENSION.width,
          index * DIMENSION.width,
          (index + 1) * DIMENSION.width,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP,
      );
      return {
        opacity: opacityAnimation,
        width: DIMENSION.width * 0.8,
        height: DIMENSION.width * 0.8,
        transform: [{translateY: translateYAnimation}],
      };
  });
  const textAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * DIMENSION.width,
          index * DIMENSION.width,
          (index + 1) * DIMENSION.width,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * DIMENSION.width,
          index * DIMENSION.width,
          (index + 1) * DIMENSION.width,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP,
      );
      return {
        opacity: opacityAnimation,
        transform: [{translateY: translateYAnimation}],
      };
  });
  
  return (
    <View style={[styles.itemContainer,{width:DIMENSION.width}]}>
       <View>
          <Animated.Image 
          source={item.image} 
          style={[imageAnimationStyle,styles.itemImage]} 
          resizeMode="contain"
          />
       </View>
       <Animated.View style={textAnimationStyle}>
            <Text style={styles.itemTitle}>{item.title} {index}</Text>
            <Text style={styles.itemText}>{item.description}</Text>
       </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:30
  },
  itemTitle:{
    fontSize:30,
    color:'#000000',
    textAlign:'center',
    marginTop:20,
  },
  itemText:{
    textAlign:'center',
    color: COLORS.gray,
    marginTop:15
  },
  itemImage:{
   resizeMode:"cover",
  },
  
});


export default OnBordingItem;