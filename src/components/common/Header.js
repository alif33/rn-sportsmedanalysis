import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Slide from "./Slide";

const navItems = [
  {
    title: "NFL",
    _path: "nfl"
  },
  {
    title: "NBA",
    _path: "nba"
  },
  {
    title: "MLB",
    _path: "mlb"
  },
  {
    title: "PODCAST",
    _path: "podcast"
  },
  {
    title: "WATCH",
    _path: "watch"
  },
]

export default function Header({ navigation }) {

  return (
    <View style={styles.pageHeader}>
        <View style={styles.body}>
          <View style={styles.headLeft}>
            <Image 
                style={styles.image}
                source={require('../../../assets/LOGO.png')} 
            />
            <Text style={styles.brandName}>SPORTSMED ANALYTICS</Text>
          </View>
          <View style={styles.headRight}>
            <Image 
                style={styles.icon}
                source={require('../../../assets/icons/BELLNN.png')} 
            />
            <Image 
                style={styles.icon}
                source={require('../../../assets/icons/HAMBERGERNN.png')} 
            />
            
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.slider}>
          {
            navItems.map((nav, index)=>(
              <Slide
                key={index}
                title={nav.title}
                _path={nav._path}
                navigation={navigation}
              />
            ))
          }          
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    flex: .24, 
    flexDirection: "column",
    backgroundColor: "#DEDEDE"
  },
  body: {
    flex: .6,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50
  },
  headLeft: {
    flexDirection: "row"
  },
  headRight: {
    flexDirection: "row"
  },
  image: {
    width: 60,
    height: 58,
    marginBottom: 8,
    alignSelf: "center",
    marginTop: 16
  },
  brandName: {
    fontSize: 15,
    fontWeight: "400",
    textAlignVertical: "center"
  },
  icon: {
    height: 35,
    width: 35
  },
  slider: {
    flex: 4,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 35
  },

});
