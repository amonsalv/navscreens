import { View, Text, Button } from "react-native";
import { styles } from '../assets/styles/styles';

export default function Contacts(){
  const {email, phone} = route.params
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Estamos en Contactos</Text>
        <Text>Email: {email}</Text>
        <Text>Phone: {phone}</Text>
      </View>
    )
  }
  

