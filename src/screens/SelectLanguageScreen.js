import {View,Text,SafeAreaView,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {COLORS} from '@constants/Helper.js'

import LanguageItem from '@components/language/LanguageItem';
import ButtonCustome from '@components/assert/ButtonCustome';
import {useState,useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';
const SelectLanguageScreen = () => {
  const [selectedLanguage,setSelectedLanguage] = useState('GU');
  const navigation = useNavigation();
  const changeLangauge = useCallback((language) => {
    setSelectedLanguage(language);
  });
  const handlSubmit = () => {
    navigation.navigate('OnBordingScreen');
  }
  return (
    <SafeAreaView style={styles.languageWrapper}>
       <View>
          <Image
           source={require('@assets/images/language.png')}
           resizeMode="contain"
          />
          <Text style={styles.title}>Choose your language</Text>
          <View>
              <LanguageItem
              icon={require('@assets/images/english.png')}
              title={'English'}
              language={'EN'}
              selectedLanguage={selectedLanguage}
              changeLangauge={changeLangauge}
              />
              
              <LanguageItem
              icon={require('@assets/images/hindi.png')}
              title={'Hindi'}
              language={'HI'}
              selectedLanguage={selectedLanguage}
              changeLangauge={changeLangauge}
              />
              
              <LanguageItem
              icon={require('@assets/images/gujarati.png')}
              title={'Gujarati'}
              language={'GU'}
              selectedLanguage={selectedLanguage}
              changeLangauge={changeLangauge}
              />
              <View style={styles.button}>
                <ButtonCustome
                  lable={"Select"}
                  handalFun={handlSubmit}
                />
              </View>
               
          </View>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  languageWrapper:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:COLORS.white,
  },
  title:{
    fontSize:25,
    textAlign:'center',
    marginVertical:20
  },
  itemWarpper:{
    backgroundColor:COLORS.main,
    justifyContent:'left',
    alignItems:'center',
    flexDirection:'row'
  },
  button:{
    marginTop:30,
    justifyContent:'left',
    alignItems:'center',
  },
});


export default SelectLanguageScreen;