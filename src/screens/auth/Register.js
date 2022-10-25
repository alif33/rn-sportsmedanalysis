import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Header from '../../components/auth/Header';

export default function App() {

  const bs = ['default', 'dark-content', 'light-content']
  return (
    <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#FFFFFF" barStyle={bs[0]}/>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.parent}>
                <View style={styles.container}>
                    <Header
                      title="Create your account"
                      subTitle="Create account for exploring news"
                    />
                    <View style={styles.inputBox}>
                      <Text style={styles.label}>First Name</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Eneter your Email"
                      />
                      <Text style={styles.label}>Last Name</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Eneter your Email"
                      />
                      <Text style={styles.label}>Password</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Eneter your Email"
                      />
                      <Text style={styles.label}>Confirm Password</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Eneter your Email"
                      />
                      <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Continue</Text>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: "100%",
    color: "#000",
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    borderRadius: 40
  },
  image: {
    width: 280,
    height: 280,
  },
  inputBox: {
    flex: .6, 
    flexDirection: "column"
  },
  label: {
    fontSize: 14,
    fontWeight: "500"
  },
  input: {
    width: 315,
    height: 50,
    margin: 12,
    padding: 10,
    backgroundColor: "#F8F7FB",
    borderRadius: 10
  },
  btn: {
    height: 56,
    borderRadius: 15,
    backgroundColor: "#D70404",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF"
  },
  socialAuth: { 
    flex: .28, 
    flexDirection: "column" 
  },
  socialTitle: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    color: "#969AA8",
    lineHeight: 20
  },
  authLogo: {
    flexDirection: "row",
    justifyContent: "center"
  },
  socIcon: {
    width: 44,
    height: 44,
    marginRight: 10,
    marginTop: 15
  },
  apple: {
    width: 36,
    height: 42,
    marginTop: 15
  }
});
