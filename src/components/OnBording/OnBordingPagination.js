import { StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import Animated, {useSharedValue,withSpring,useDerivedValue} from 'react-native-reanimated';
import {useEffect} from 'react';
import {COLORS,DIMENSION} from '@constants/Helper'; 
import {setItem} from '@constants/Storage'; 
import { useNavigation } from '@react-navigation/native';

const OnBordingPagination = ({slidIndex,OnBordingData,changeNextSlider}) => {
 const navigation = useNavigation();

  const activePointWidth = useSharedValue(35);
  const animatedWidth = useDerivedValue(() => {
    return withSpring(35, { damping: 20, stiffness: 20 }); // Adjust damping and stiffness for a slow-motion spring effect
  }, [slidIndex]);

  useEffect(() => {
    activePointWidth.value = animatedWidth.value;
  }, [slidIndex]);
  
  const handelButtonPress = (slidIndex) => {
    if(OnBordingData.length - 1 == slidIndex){
      setItem('onBordingProcessDone','Yes');
      navigation.navigate('LoginScreen');
    }else {
      changeNextSlider(slidIndex);
    }
  }

  return (
       <View style={styles.paginationWrapper}>
       <Animated.View style={styles.pagination}>
       {
         OnBordingData.map((item,index)=> {
         let pointStyles = styles.point;
         if(slidIndex == index){
            pointStyles = [styles.point,{backgroundColor:'#2EACF2',width:activePointWidth.value}];
         }
         return <Text key={index} style={pointStyles}></Text>;
         })
       }
       </Animated.View>
       <TouchableOpacity style={styles.button} onPress={() => handelButtonPress(slidIndex) }>
         {
          (OnBordingData.length - 1) == slidIndex ?
          <Text style={styles.buttonLabal}>Get Started</Text>
          :
          <Text style={styles.buttonLabal}>Next</Text>
         }
       </TouchableOpacity>
      </View>
    )
}


const styles = StyleSheet.create({

  pagination:{
    flexDirection:'row',
    height:25,
    justifyContent:'center',
    alignItems:'center'
  },
  point:{
     backgroundColor:'#fff',
     height: 15,
     width:15,
     marginHorizontal: 10,
     borderRadius: 10,
     borderStyle:'solid',
     borderColor:COLORS.darkBlack,
     borderWidth: 1,
  },
  button:{
    backgroundColor:COLORS.main,
    paddingVertical:15,
    borderRadius:50,
    width:DIMENSION.width * 0.5,
    marginBottom:40,
    color:'#fff'
  },
  paginationWrapper:{
    height:DIMENSION.width * 0.4,
    alignItems:'center',
    justifyContent:'space-between'
  },
  buttonLabal:{
    color:'white',
    textAlign:'center',
    fontWeight:'600',
    fontSize:15,
  }
});

export default OnBordingPagination;