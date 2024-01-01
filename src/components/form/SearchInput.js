import { View, Text, SafeAreaView, StyleSheet, Image, TextInput,TouchableOpacity} from 'react-native';
import { COLORS, DIMENSION } from '@constants/Helper.js';

import Icon from 'react-native-vector-icons/FontAwesome';

const SearchInput = () => {
  return (
    <View style={styles.inputWrapper}>
           <View opacity={0.3} style={styles.searchInputIcon}>
              <Icon name={'search'} size={20} color={'black'} />
           </View>
           <TextInput style={styles.searchInput} placeholder={'Find Works..!'} />
          <TouchableOpacity>
             <Icon  name={'microphone'} size={20} color={COLORS.main} />
          </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({

  searchInput: {
   flex:1,
   paddingHorizontal:8,
   fontSize:21
  },
  inputWrapper:{
    justifyContent: 'left',
    alignItems: 'center',
    flexDirection:'row',
    height: 50,
    paddingHorizontal: 8,
    marginHorizontal:8,
    fontSize: 20,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius:5
  }
});
export default SearchInput;