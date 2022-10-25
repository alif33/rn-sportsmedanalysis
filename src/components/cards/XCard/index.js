import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity
} from 'react-native';
import CardIcon from './CardIcon';

export default function XCard({ image }) {

  return (
    <View style={styles.card}>
        <View style={styles.header}>
            <View style={styles.left}>
                <Image 
                    style={styles.image}
                    source={require('../../../../assets/icons/BOOKMARKNN.png')}  
                />
                <Text style={styles.riText}>Bloomburg</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.badgeText}>Sports</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.body}>
            {
                image && <Image 
                    style={styles.cardImage}
                    source={require('../../../../assets/PLAYERSM.png')}  
                />
            }
            <Text style={styles.title}>
                When it comes to basketball, Jack Miller is strictly business
            </Text>
            <Text style={styles.desc}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir...
            </Text>
        </TouchableOpacity>
        <View style={styles.footer}>
            <View style={styles.times}>
                <Image 
                    style={styles.image}
                    source={require('../../../../assets/icons/BOOKMARKNN.png')}  
                />
                <Text style={styles.footerTime}>9hours ago</Text>
                
            </View>
            <View style={ styles.icon}>
                <CardIcon
                    image={require('../../../../assets/icons/COMMENTNN.png')}
                />
                <CardIcon
                    image={require('../../../../assets/icons/SHARENN.png')}
                />
                <CardIcon
                    image={require('../../../../assets/icons/BOOKMARKNN.png')}
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 5
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12
    },
    left: {
        flexDirection: "row"
    },
    riText: {
        fontSize: 12,
        fontWeight: "600"
    },
    right: {
        backgroundColor: "#f9d1c8",
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 3
    },
    badgeText: {
        color: "#FB6777",

    },
    body: {

    },
    cardImage: {
        width: 295,
        height: 145,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#1C1C1C"
    },
    desc: {
        fontSize: 14,
        fontWeight: "400",
        color: "#808080",
        paddingVertical: 10
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12
    },
    times: {
        flexDirection: "row",
    },
    footerTime: {
        fontSize: 12,
        fontWeight: "400",
        color: "#9D9D9D"
    },
    icon: {
        flexDirection: "row"
    },
    image: {
        width: 20,
        height: 20.68,
        marginHorizontal: 4
    }

});
