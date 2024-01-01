import {View,Text,SafeAreaView,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {COLORS} from '@constants/Helper.js'


const LanguageItem = ({icon,title,language,changeLangauge,selectedLanguage}) => {
  
  return (
    <TouchableOpacity style={styles.languageItemWarpper} onPress={() => changeLangauge(language) }>
      <View style={[styles.itemWarpper,language == selectedLanguage ? {backgroundColor:COLORS.main} : {}]}>
         <Image
           source={icon}
           resizeMode="contain"
          />
          <Text style={[styles.title,language == selectedLanguage ?
          {color:'white'} : {}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemWarpper:{
    backgroundColor:'white',
    justifyContent:'left',
    alignItems:'center',
    flexDirection:'row',
    borderRadius: 50,
    shadowColor:'black',
    shadowOffset: {width: 8, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 9,
    elevation: 10
  },
  languageItemWarpper:{
    paddingVertical:10,
  },
  title:{
    fontWeight:'500',
    paddingLeft:20
  }
});

export default LanguageItem;