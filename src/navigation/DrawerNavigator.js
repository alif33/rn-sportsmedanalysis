import { createDrawerNavigator } from "@react-navigation/drawer";
import Disclaimer from "../screens/others/Disclaimer";
import PrivacyPolicy from "../screens/others/PrivacyPolicy";
import TermsOfUse from "../screens/others/TermsOfUse";
import FAQ from "../screens/others/Faq";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="disclaimer">
            <Drawer.Screen component={ Disclaimer } name="disclaimer"/>
            <Drawer.Screen component={ FAQ } name="faq"/>
            <Drawer.Screen component={ PrivacyPolicy } name="privacy-policy"/>
            <Drawer.Screen component={ TermsOfUse } name="terms-of-use"/>
        </Drawer.Navigator>
    );
  };
  
  export default DrawerNavigator;