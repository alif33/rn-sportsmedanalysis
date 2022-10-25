import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import NFL from "../screens/NFL";
import NBA from "../screens/NBA";
import MLB from "../screens/MLB";
import Watch from "../screens/Watch";
import Podcast from "../screens/Podcast";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen component={Home} name="home"/>
        <Stack.Screen component={NFL} name="nfl"/>
        <Stack.Screen component={NBA} name="nba"/>
        <Stack.Screen component={MLB} name="mlb"/>
        <Stack.Screen component={Podcast} name="podcast"/>
        <Stack.Screen component={Watch} name="watch"/>
        
        <Stack.Screen component={Login} name="login"/>
        <Stack.Screen component={Register} name="register" />
      </Stack.Navigator>
    );
  };
  
  export default StackNavigator;