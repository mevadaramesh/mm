import React, { memo,useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

import {useDispatch,useSelector} from 'react-redux';
import {setSelectedCountry} from '@actions/CountrySelectioAction';

const CountryItem = memo(({item,languageModalToggel}) => {
   
    const selectCountry = useSelector(state => state.selectedCountry);
    const dispatch = useDispatch();
    const handleLanguagePressEvent = (county) => {
      languageModalToggel();
      dispatch(setSelectedCountry(county));
    }
    
    return (
       <TouchableOpacity 
            underlayColor="dark"
            activeOpacity={0.7}
            onPress={() => handleLanguagePressEvent(item)}
            style={item.alpha2Code === selectCountry?.alpha2Code ? { 
                  backgroundColor: '#2EACF2',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#fff', 
                  elevation: 2,
                } : {}}
            >
            <View style={styles.languageItem}>
              <Image
                source={{ uri: item.flags?.png }}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={[styles.text,item.alpha2Code ===
              selectCountry?.alpha2Code ? {color:'#2EACF2'} : {}]}>{item.name}</Text>
              <Text style={[styles.text,item.alpha2Code ===
              selectCountry?.alpha2Code ? {color:'#2EACF2'} : {}]}>+{item?.callingCodes[0]}</Text>
            </View>
            </TouchableOpacity>
    )
});

export default CountryItem;

const styles = StyleSheet.create({
  
  languageItem:{
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'98%',
    height:60,
    borderRadius: 10,
    elevation: 3, 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1, 
    marginVertical:7,
    marginHorizontal:2,
    paddingHorizontal:5
  },
  image: {
    width: 50,
    height:50
  },
  text:{
    fontWeight:'500'
  }
});