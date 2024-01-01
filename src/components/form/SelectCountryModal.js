import React, { useState,useEffect} from 'react';
import {Modal,View,Text,TouchableOpacity,StyleSheet,Image,SafeAreaView,ScrollView,FlatList,TextInput} from 'react-native';
import CountryItem from '@components/form/CountryItem';

import {useDispatch,useSelector} from 'react-redux';
import {setSelectedCountry} from '@actions/CountrySelectioAction';
import {getApi} from '@api/commonApi';


const SelectCountryModal =({isVisible,languageModalToggel}) => {
  
 const [searchCountryData,setSearchCountryData] = useState();
 const [countryData,setCountryData] = useState(null);
 const [searchKey,setSearchKey] = useState();
 const dispatch = useDispatch();
 

 useEffect(() => {
    getApi("https://restcountries.com/v2/all?fields=name,flags,callingCodes,alpha2Code")
      .then((res) => {
        setSearchCountryData(res.data);
        setCountryData(res.data);
      }).catch((error) => {
        console.log(error);
      });
 },[]);
   
   
 const searchCountry = (search = "") => {
   if(search){
     let filterData = countryData.filter((item) => {
       return item.name.toLowerCase().includes(search.toLowerCase()) ||
       item?.callingCodes[0].toLowerCase().includes(search.toLowerCase());
     });
     setSearchCountryData(filterData);
   }else {
     setSearchCountryData(countryData);
   }
   setSearchKey(search);
 }
 
 
  return (
    <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isVisible}
        onRequestClose={languageModalToggel}
      >
        <View style={styles.modalContainer} >
          
          {/* Your select list and custom styling here */}
          <SafeAreaView style={styles.modalContent} >
          <View>
            <TextInput
             style={styles.input}
             placeholder={"Search Your Country..!"}
             value={searchKey}
             onChangeText={(text) => searchCountry(text)}
            />
          </View>
          
          <FlatList 
          data={searchCountryData}
          initialNumToRender={7}
          maxToRenderPerBatch={10}
          windowSize={10}
          renderItem={({item}) => 
          <CountryItem 
          item={item} 
          languageModalToggel={languageModalToggel}  />}
          keyExtractor={(_, index) => `list_item${index}`}
          />
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F8F8FF',
    height: '70%', // Half of the screen
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  input: {
    //flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    elevation: 3, 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    marginBottom:10,
  }
});

export default SelectCountryModal;
