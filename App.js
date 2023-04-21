import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
// Importar componentes para la navegación y generación de la pila de screens
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons} from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Contacts from './screens/Contacts';
import Login from './screens/Login';

// Crear constante para generar las rutas de los screens
let users = [
  {username:'hruiz',name:'Humberto Ruiz',password:'11', role:1},
  {username:'jdoe',name:'John Doe',password:'22', role:2}
]

const Stack = createNativeStackNavigator(); //Definir las rutas de cada componente
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{title:'Inicio'}} />

        <Stack.Screen name="Profile" component={ProfileScreen} options={{title:'Perfil del Usuario'}}/>
        <Stack.Screen name="Contacts" component={Contacts} options={{title:'Contactenos'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
  //        <Stack.Screen name="Login" component={LoginScreen} options={{title:'Login'}} />
}

//function ProfileScreen

function HomeScreen({navigation}){
  return(
    <View style>

    </View>
  )
}

function HomeTabs(){ //agregamos la barra de navegacion 
  return(
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'gray',
      tabBarActiveBackgroundColor:'aqua',
      tabBarInactiveBackgroundColor:'powderblue'
    }}
    >
      <Tab.Screen name= "Home" component={HomeScreen} options={{
        tabBarStyle:{display:none}// que el log in tenga desactivado elboton tabs mientras ingresa el usuario
        tabBarIcon: (tabInfo) => ()
      }} />
      <Tab.Screen name= "Profile" component={HomeScreen} options={{}}/>
      <Tab.Screen name= "Contacts" component={HomeScreen} options={{}}/>
    </Tab.Navigator>
  );
}

