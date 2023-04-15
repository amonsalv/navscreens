import { View, Text, Button } from "react-native";
import { styles } from '../assets/styles/styles';

export default function ProfileScreen(){
  let email = "cosas@gmail.com";
  let phone = "6045241236";
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom:10}}>Estamos en Perfil del usuario</Text>
        <Button title='Contactenos'
        onPress={()=>{
          navigation.navigate('Contacts',{email:email, phone:phone })
        }}
        />
      </View>
    )
  }

