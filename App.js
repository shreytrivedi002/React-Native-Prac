import WeatherScreen from './src/screens/Weather'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notes from './src/screens/Notes';
import News from './src/screens/News';
const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Weather' component={WeatherScreen} />
        <Stack.Screen name='Notes' component={Notes} />
        <Stack.Screen name='News' component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
