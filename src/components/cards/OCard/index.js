import { 
    StyleSheet, 
    View, 
    Text
} from 'react-native';


export default function OCard({ title, paragraph }) {

  return (
    <View style={styles.card}>
        {
            title && <Text style={styles.title}>{title}</Text>
        }
        <Text style={styles.paragraph}>{paragraph}</Text>
        <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#121212"
    },
    paragraph: {
        fontSize: 13,
        fontWeight: "400",
        color: "#121212"
    }
});
