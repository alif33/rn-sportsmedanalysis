import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default function XCardIcon({ image, handleAction }) {

  return (
    <TouchableOpacity
        onPress={handleAction}
    >
        <Image 
            style={styles.image}
            source={image}  
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20.68,
        marginHorizontal: 4
    }
});
