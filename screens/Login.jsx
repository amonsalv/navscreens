//tarea crear un login con el mismo metodo y comprobar para el email y password https://reactnavigation.org/docs/auth-flow/ buascar como: login with react native and native stack navigator

import { View, Text, Button } from "react-native";
import { styles } from '../assets/styles/styles';

export default function Login (){
    let email = "cosas@gmail.com";
    let password = "X1x2";
    return(
        <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom:10}}>Estamos en el Log in del Usuario</Text>
        <Button title='Log in'
        onPress={()=>{
          navigation.navigate('Contacts',{email:email, password:password })
        }}
        />
      </View>
    )
}

