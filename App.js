import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CapitalsHome from './screens/CapitalsScreen/CapitalsHome';
import TraditionsHome from './screens/TraditionsScreen/TraditionsHome';
import AnimalsHome from './screens/AnimalsScreen/AnimalsHome';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="CapitalsHome" component={CapitalsHome}/>
        <Stack.Screen name="TraditionsHome" component={TraditionsHome}/>
        <Stack.Screen name="AnimalsHome" component={AnimalsHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}