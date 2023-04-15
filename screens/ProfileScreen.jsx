import { View, Text, Button } from "react-native";
import { styles } from '../assets/styles/styles';

function ProfileScreen(){
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Estamos en Perfil del usuario</Text>
      </View>
    )
  }

  export default ProfileScreen;