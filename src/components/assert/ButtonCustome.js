import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import { COLORS,DIMENSION} from '@constants/Helper';

const ButtonCustome = ({lable,handalFun}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => handalFun()}>
        <Text style={styles.buttonLabal}>{lable}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCustome;

const styles = StyleSheet.create({
  button:{
    backgroundColor:COLORS.main,
    paddingVertical:15,
    borderRadius:50,
    width:DIMENSION.width * 0.5,
    marginBottom:40,
    color:'#fff'
  },
  buttonLabal:{
    color:'white',
    textAlign:'center',
    fontWeight:'600',
    fontSize:15,
  }
});
