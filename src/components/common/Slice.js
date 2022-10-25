import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default function Slice({  }) {

  return (
    <TouchableOpacity style={styles.slice}>
        <View style={styles.avatar}>
            <Image 
                style={styles.image}
                source={require('../../../assets/Player.png')} 
            />
        </View>
        
        {/* <Text style={styles.image}>Image</Text> */}
        <View style={styles.body}>
            <Text style={styles.name}>ALLEN LAZARD</Text>
            <Text style={styles.desc}>this is lorem ipsum. no worries about it. this is lorem ipsum. no worries about it</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  slice: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 4,
    elevation: 3
  },
  avatar: {
    width: "20%"
  },
  image: {
    height: 52.26,
    width: 52.26,
  },
  body: {
    width: "80%"
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#121212"
  },
  desc: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C5656"
  }

});
