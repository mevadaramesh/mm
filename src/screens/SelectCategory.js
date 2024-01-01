import { View, Text, SafeAreaView, StyleSheet,FlatList, Image,TextInput,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import { COLORS, DIMENSION } from '@constants/Helper.js';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchInput from '@components/form/SearchInput';

const SelectCategory = () => {
  const [categories,setCategories] = useState([
  {id:1,name:'farmaer',image:require('@assets/images/cat2.png')},
  {id:2,name:'farmaer',image:require('@assets/images/cat1.png')},
  {id:3,name:'farmaer',image:require('@assets/images/cat2.png')},
  {id:4,name:'farmaer',image:require('@assets/images/avatar.png')},
  {id:5,name:'farmaer',image:require('@assets/images/avatar.png')},
  {id:6,name:'farmaer',image:require('@assets/images/avatar.png')},
  {id:7,name:'farmaer',image:require('@assets/images/avatar.png')},
  {id:8,name:'farmaer',image:require('@assets/images/avatar.png')},
  {id:9,name:'farmaer',image:require('@assets/images/avatar.png')},
  {id:10,name:'farmaer',image:require('@assets/images/avatar.png')},
]);


const [selectedCategoies,setSelectedCategoies] = useState([]);

const heandleSelectedCategory = (id) => {
  setSelectedCategoies(prevState => {
    if (prevState.includes(id)) {
      return prevState.filter(item => item !== id);
    } else {
      return [...prevState, id];
    }
  });
};


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Kalpesh.!</Text>
        <View style={styles.whiteBorder}>
          <Image
            source={require('@assets/images/avatar.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.content}>

        <SearchInput />
        <View>
          <Text style={styles.heading}>Categories</Text>
        </View>
      
        <View style={styles.categoryWrapper}>
          
          <FlatList 
          data={categories}
          initialNumToRender={7}
          maxToRenderPerBatch={10}
          windowSize={10}
          numColumns={2}
          renderItem={({item}) => 
          <TouchableWithoutFeedback onPress={() => heandleSelectedCategory(item.id)}>
          <View style={[styles.categoryItem,selectedCategoies.includes(item.id) ? styles.ItemActive: {}]}>
          <View style={styles.checkbox}>
            <View style={[styles.checkboxRing,selectedCategoies.includes(item.id) ? styles.activeColor: {}]}>
              <View style={[styles.checkboxDot,selectedCategoies.includes(item.id) ? {backgroundColor:COLORS.main}: {}]}></View>
            </View>
          </View>
          <Image
            source={item.image}
            resizeMode="cover"
            fadeDuration={500}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryTitle}>Farmer</Text>
          </View>
          </TouchableWithoutFeedback>
          }
          keyExtractor={(_, index) => `list_item${index}`}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  header: {
    height: 180,
    backgroundColor: COLORS.main,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: DIMENSION.width * 0.3,
    height: DIMENSION.width * 0.3,
    borderRadius: 100,
  },
  whiteBorder: {
    borderWidth: 8,
    borderColor: 'white',
    borderRadius: 100,
    marginBottom: -40
  },
  title: {
    fontWeight: '600',
    color: 'white',
    fontSize: 22,
    marginBottom: 20
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop:50,
    paddingHorizontal:8,
  },
  heading:{
    color:'black',
    fontWeight:'700',
    fontSize:25,
    marginVertical:20,
    paddingHorizontal:8,
  },
  categoryWrapper:{
    flex:1,
    overflow: 'hidden',
  },
  categoryItem:{
   flex: 1,
   flexDirection: 'column',
   margin: 10,
   backgroundColor:'white',
   justifyContent:'center',
   alignItems:'center',
   borderRadius:8,
   shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  categoryImage:{
    flex: 1,
    aspectRatio: 1, 
    width: '100%',
    height: undefined, 
    overflow: 'hidden'
  },
  categoryTitle:{
    color:'black',
    fontSize:20,
    textTransform: 'capitalize',
    marginVertical:2
  },
  checkbox:{
    width:40,
    height:40,
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    position:'absolute',
    zIndex:5,
    top:0,
    right:0,
    borderRadius:100,
    marginTop:5,
    marginRight:5
  },
  checkboxDot: {
  backgroundColor: '#9A9797',
  width: 10,
  height: 10,
  borderRadius: 100,
  position: 'absolute',
  top: '50%',       // Place the dot in the vertical center
  left: '50%',      // Place the dot in the horizontal center
  transform: [{ translateX: -5 }, { translateY: -5 }], // Translate to center
},
  checkboxRing: {
  //backgroundColor: 'red',
  width: 24,
  height: 24,
  borderWidth:2,
  borderColor:'#9A9797',
  borderRadius: 100,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: [{ translateX: -12 }, { translateY: -12 }], // Translate to center
},
  activeColor:{
  borderColor:COLORS.main,
  overflow: 'hidden',
 },
  ItemActive:{
  shadowColor: COLORS.main,
  // shadowOffset: {
  // 	width: 0,
  // 	height: 0,
  // },
  // shadowOpacity: 0,
  // shadowRadius: 0,
  // elevation: 0,
  borderWidth:3.84,
  borderColor:COLORS.main,
  borderBox: false,
  overflow: 'hidden',
}
});

export default SelectCategory;
