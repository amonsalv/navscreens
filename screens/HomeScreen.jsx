import { View, Text, Button } from "react-native";
import { styles } from '../assets/styles/styles';

function HomeScreen(navigation){
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Estamos en inicio</Text>
        <Button
        title="Ir al Perfil del Usuario"
        onPress={ ()=> {
          navigation.navigate('profile')
        }}
        />
      </View>
    )
  }

  export default HomeScreen;