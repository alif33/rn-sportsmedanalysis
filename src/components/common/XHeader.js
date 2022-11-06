import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header({ navigation, title }) {

  return (
    <View style={styles.pageHeader}>
        <View style={styles.body}>
            <TouchableOpacity 
                onPress={()=>navigation.goBack()} 
                style={styles.icon}
            >
                <Image 
                    style={styles.image}
                    source={require('../../../assets/icons/BACK.png')} 
                />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    flex: .12,
    width: "95%", 
    alignSelf: "center",
    flexDirection: "row",
  },
  body: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 40
  },
  icon: {
    flex: .1
  },
 image: {
    width: 18,
    height: 12
 },
 title: {
    flex: .9,
    fontSize: 20,
    fontWeight: "700",
    color: "#08080A",
    textAlign: "center"
 }
});
