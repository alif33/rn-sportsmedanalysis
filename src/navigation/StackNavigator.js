import {createStackNavigator} from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from "../screens/Home";
import NFL from "../screens/NFL";
import NBA from "../screens/NBA";
import MLB from "../screens/MLB";
import Watch from "../screens/Watch";
import Podcast from "../screens/Podcast";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
// import Drawer from "./DrawerNavigator";
import { Feather } from '@expo/vector-icons';
import Disclaimer from "../screens/others/Disclaimer";
import PrivacyPolicy from "../screens/others/PrivacyPolicy";
import TermsOfUse from "../screens/others/TermsOfUse";
import FAQ from "../screens/others/Faq";
import { StyleSheet, useWindowDimensions, View } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



// const Drawer = createDrawerNavigator();

export default function DroWer() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Disclaimer} />
        <Drawer.Screen name="Notifications" component={PrivacyPolicy} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}



// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen component={ Disclaimer } name="disclaimer"/>
//       <Drawer.Screen component={ FAQ } name="faq"/>
//       <Drawer.Screen component={ PrivacyPolicy } name="privacy-policy"/>
//       <Drawer.Screen component={ TermsOfUse } name="terms-of-use"/>
//     </Drawer.Navigator>
//   );
// }




// const StackNav = () => {
//   return (
//     <Stack.Navigator>
//         <Stack.Screen component={ Disclaimer } name="disclaimer"/>
//         <Stack.Screen component={ FAQ } name="faq"/>
//         <Stack.Screen component={ PrivacyPolicy } name="privacy-policy"/>
//         <Stack.Screen component={ TermsOfUse } name="terms-of-use"/>
//     </Stack.Navigator>
//   );
// };

// function CustomDrawerContent(props) {
//   const width = useWindowDimensions().width * 0.3;

//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={styles.menuContainer}>
//         <View
//           style={[
//             styles.menuItemsCard,
//             { backgroundColor: '#fff2df', width: width, height: width },
//           ]}>
//           <>
//             <View
//               style={[styles.circleContainer, { backgroundColor: '#FFC56F' }]}>
//               <Feather travel name="briefcase" size={25} color="#fbae41" />
//               <DrawerItem
//                 label="Screen1"
//                 labelStyle={{ color: '#fbae41', fontSize: 10 }}
//                 onPress={() => {
//                   props.navigation.navigate('Screen1');
//                 }}
//               />
//             </View>
//           </>
//           <DrawerItem
//             style={{
//               position: 'absolute',
//               left: 0,
//               width: width,
//               height: width,
//             }}
//             label="Screen2"
//             labelStyle={{ color: '#609806' }}
//             onPress={() => {
//               props.navigation.navigate('Screen1');
//             }}
//           />
//         </View>
//         <View
//           style={[
//             styles.menuItemsCard,
//             { backgroundColor: '#EFFFD5', width: width, height: width },
//           ]}>
//           <View
//             style={[styles.circleContainer, { backgroundColor: '#b5ff39' }]}>
//             <Feather Medical name="briefcase" size={25} color="#609806" />
//           </View>

//           <DrawerItem
//             style={{
//               position: 'absolute',
//               left: 0,
//               width: width,
//               height: width,
//             }}
//             label="Screen2"
//             labelStyle={{ color: '#609806' }}
//             onPress={() => {
//               props.navigation.navigate('StackNav');
//             }}
//           />
//         </View>
//       </View>
//     </DrawerContentScrollView>
//   );
// }






// const StackNavigator = () => {
//     return (
//       <Drawer.Navigator
//         // drawerContent={(props) => <CustomDrawerContent {...props} />}
//       > 

//         <Drawer.Screen component={ Disclaimer } name="disclaimer"/>
//         <Drawer.Screen component={ FAQ } name="faq"/>
//         <Drawer.Screen component={ PrivacyPolicy } name="privacy-policy"/>
//         <Drawer.Screen component={ TermsOfUse } name="terms-of-use"/>


//         {/* <Drawer.Screen name="Stack" component={} /> */}
//         {/* <Stack.Screen component={Home} name="home"/> */}
//         {/* <Stack.Screen component={Root} name="Root"/>
//         <Stack.Screen component={NFL} name="nfl"/>
//         <Stack.Screen component={NBA} name="nba"/>
//         <Stack.Screen component={MLB} name="mlb"/>
//         <Stack.Screen component={Podcast} name="podcast"/>
//         <Stack.Screen component={Watch} name="watch"/> */}

//         {/* <Stack.Screen component={FAQ} name="faq"/> */}
//         {/* <Stack.Screen component={Watch} name="watch"/> */}
        
//         {/* <Stack.Screen component={Login} name="login"/>
//         <Stack.Screen component={Register} name="register" /> */}
//       </Drawer.Navigator>
//     );
//   };
  
//   export default StackNavigator;


  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   menuContainer: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     justifyContent: 'space-evenly',
  //   },
  //   menuItemsCard: {
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 10,
  //   },
  //   circleContainer: {
  //     width: 50,
  //     height: 50,
  //     borderRadius: 25,
  //     padding: 10,
  //   },
  // });