import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default function Slide({ title, navigation, _path }) {

  return (
    <TouchableOpacity
        style={styles.slide}
        onPress={()=>navigation.push(`${_path}`)}
    >
        <Text 
            style={styles.btn}
        >{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  slide: {
    marginRight: 30
  },
  btn: {
    fontSize: 18,
    fontWeight: "400",
    color: "#A9A9A9"
  }
});
