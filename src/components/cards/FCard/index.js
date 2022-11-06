import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get("window").width ;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

export default function FCard({ item, index }) {

  return (
    <View key={index} style={styles.card}>
        <TouchableOpacity style={styles.body}>
            <Image 
                style={styles.cardImage}
                source={require('../../../../assets/PLAYERSM.png')}  
            />
            <Text style={styles.title}>
                {item.title}
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 5
    },
    body: {
        width: "100%",
    },
    cardImage: {
        width: "100%"
    },
    title: {
        width: "95%",
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "600",
        paddingVertical: 15
    }
});
