import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from "./src/navigation/StackNavigator";
import Home from './src/screens/Home';
// import Drawer from "./src/navigation/DrawerNavigator";

export default function App() {
  return (
    // <Home/>
    <NavigationContainer>
      <Navigator/>
      {/* <Drawer/> */}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
