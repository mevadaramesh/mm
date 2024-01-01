import React from 'react';
import { StyleSheet,ScrollView,Image, Text, View, SafeAreaView, TextInput, KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import {useState, useRef,useEffect} from 'react';
//helpers
import { DIMENSION,COLORS} from '@constants/Helper';

// common components
import Input from '@components/form/Input';
import CountrySelectionInput from '@components/form/CountrySelectionInput';
import ButtonCustome from '@components/assert/ButtonCustome';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [showPassword,setShowPassword] = useState(true);
  const passwordIconEvent = () => {
    setShowPassword(!showPassword);
  }
  const selectedCountry =  useSelector(state => state.selectedCountry);
  const [loginData,setloginData] = useState({
    fullname  : "",
    phone     : "",
    email     : "",
    age       : "",
    gender    :"male",
    countryCode:'+91'
  });
  
  useEffect(()=> {
    handleCountryCode();
  },[selectedCountry]);
  
  const handleCountryCode = () => {
      setloginData({ ...loginData, countryCode:selectedCountry?.callingCodes[0]  });
  };
  
  const handleOnChange = (value,key) => {
      setloginData({ ...loginData, [key]:value  });
  };
  
  const handlSubmit = () => {
    navigation.navigate('SelectCategory');
    // console.log(JSON.stringify(loginData));
    // alert(JSON.stringify(loginData));
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Text>Image</Text>
      </View>
     <View style={styles.titleWarpper}>
       <Text style={styles.title}>Welcome</Text>
     </View>
   <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.formModal}>
        <View style={styles.inputWrapper} behavior="padding">
          <Input 
          label={"Full Name"}
          handalFun={handleOnChange}
          keyName={"fullname"}
          value={loginData.fullName}
          />
          <CountrySelectionInput
           handalFun={handleOnChange}
           keyName={"phone"}
           value={loginData.phone}
          />
          <Input 
          label={"Email"} 
          handalFun={handleOnChange}
          keyName={"email"}
          value={loginData.email}
          keyboardType={"email-address"}
          />
          <Input 
          label={"Age"} 
          handalFun={handleOnChange}
          keyName={"age"}
          value={loginData.age}
          keyboardType={"phone-pad"}
          />
          
          <View style={styles.radioWrapper}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.radioBtnGroup}>
                <TouchableOpacity onPress={() => handleOnChange('male','gender')}>
                    <View style={styles.btnContent}>
                      <Image 
                        style={[
                        styles.radioImage,
                        loginData.gender == "male" ? styles.activeBtn : {}
                        ]}
                        source={require('@assets/images/male.jpg')} 
                        resizeMode="cover"
                      />
                      <Text 
                      style={[ loginData.gender == "male" ? styles.activeText : {}]}>Male</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOnChange('female','gender')}>
                    <View style={styles.btnContent}>
                    <Image 
                        style={[
                        styles.radioImage,
                        loginData.gender == "female" ? styles.activeBtn : {}
                        ]}
                        source={require('@assets/images/femal.jpg')} 
                        resizeMode="cover"
                      />
                      <Text 
                      style={[ loginData.gender == "female" ? styles.activeText : {}]}>Female</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.buttonWarpper}>
          <ButtonCustome
          lable={"Finish"}
          handalFun={handlSubmit}
          />
          </View>
        
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#DFF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formModal: {
    backgroundColor: 'white',
    width: DIMENSION.width,
    paddingHorizontal: 20
  },
  titleWarpper:{
    backgroundColor: 'white',
    width:'100%',
    borderTopLeftRadius: 30, // Adjust the value as needed
    borderTopRightRadius: 30,
  },
  image: {
    width: DIMENSION.width,
    height: DIMENSION.width * 0.3
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    marginTop: 17,
    paddingBottom:10
  },
  inputWrapper: {
    marginTop: 10,
    flex: 1, // Add this to ensure the KeyboardAvoidingView takes up all available space
  },
  buttonWarpper:{
    flex:1,
    marginTop:DIMENSION.width * 0.1,
    alignItems:'center',
  },
  radioWrapper:{
    flex:1,
    marginTop:15
  },
  radioImage:{
    width:100,
    height:100,
  },
  label: {
    fontWeight: '800',
    fontSize: 15,
    marginBottom: 7,
  },
  radioBtnGroup:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  btnContent:{
    alignItems:'center'
  },
  activeBtn:{
    borderWidth:3,
    borderColor: COLORS.main,
    borderRadius:100,
  },
  activeText:{
    color:COLORS.main,
    fontWeight:'500'
  },
});

export default LoginScreen;