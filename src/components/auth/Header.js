import { 
    StyleSheet, 
    Text, 
    View, 
    Image
} from 'react-native';

export default function Header({ title, subTitle }) {

  return (
    <View style={styles.pageHeader}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.haederSlogan}>{subTitle}</Text>
        <Image 
            style={styles.image}
            source={require('../../../assets/LOGO.png')} 
        />
        <Text style={styles.brandName}>SPORTSMED ANALYTICS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    flex: .32, 
    flexDirection: "column"
  },
  headerTitle: {
    fontSize: 22, 
    textAlign: "center", 
    lineHeight: 33,
    paddingTop: 20 
  },
  haederSlogan: {
    fontSize: 14, 
    textAlign: "center", 
    color: "#969AA8", 
    fontWeight: "400",
    lineHeight: 21,

  },
  image: {
    width: 60,
    height: 58,
    marginBottom: 8,
    alignSelf: "center",
    marginTop: 16
  },
  brandName: {
    fontSize: 28,
    fontWeight: "400"
  }
});
