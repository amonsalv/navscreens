import { Text, View, Button } from 'react-native';
//Librerias para el manejo de navegacion entre pantallas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Contacts from './screens/Contacts';



const Stack = createNativeStackNavigator(); //Definir las rutas de cada componente

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Inicio'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title:'Perfil del Usuario'}}/>
        <Stack.Screen name="Contacts" component={Contacts} options={{title:'Contactenos'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
