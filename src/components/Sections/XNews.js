import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import XCard from '../cards/XCard';


export default function XNews({ headline, image }) {

  return (
    <View style={styles.news}>
        <Text style={styles.title}>{headline}</Text>
        <XCard image={image}/>
    </View>
  );
}

const styles = StyleSheet.create({
    news: {
        marginTop: 30,
        width: "95%",
        alignSelf: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: "#1C1C1C"
    }

});