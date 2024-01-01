import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({
  label,
  icon,
  iconPressEvent,
  secureTextEntry,
  handalFun,
  keyName,
  value,
  keyboardType = "default"
}) => {
  return (
    <View style={style.inputWrapper}>
      <Text style={style.label}>{label}</Text>
      <View style={style.inputGroup}>
         <TextInput 
         keyboardType={keyboardType}
         onChangeText={(text)=> handalFun(text,keyName)}
         style={[style.input, icon ? { 
         borderTopRightRadius: 0, 
         borderBottomRightRadius: 0
         } : {}]} />
         {
           icon ?
           <TouchableOpacity style={style.icon}>
            <Icon name={icon} size={30} color="black" />
           </TouchableOpacity>
         :''
         }
         
      </View>
    </View>
  )
}

export default Input;

const style = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:"space-around",
    alignItems: 'center',
    height: 50,
    paddingHorizontal:10,
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
  },
  inputNumber: {
    backgroundColor: 'yellow',
  },
  image: {
    width: 40,
    height: 40
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#F6F6F6',
    alignItems:'center',
    justifyContent:'center',
    borderTopRightRadius: 10, 
    borderBottomRightRadius: 10, 
    paddingRight:10
  },
  label: {
    fontWeight: '800',
    fontSize: 15,
    marginBottom: 7,
  },
  inputGroup: {
    flexDirection: 'row', // Added 'flexDirection' to make items align horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Add space between items
    marginBottom: 0, // Added margin for spacing
  },
  inputWrapper:{
    paddingTop:15
  },
  inputGroup:{
    flexDirection:'row',
    width:'100%',
    
  }
});