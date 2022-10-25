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
  return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.parent}>
                <View style={styles.container}>
                    <Header
                      title="Welcome Back!"
                      subTitle="Let’s login for explore continues"
                    />

                    <View style={styles.inputBox}>
                      <Text style={styles.label}>Email</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Eneter your Email"
                      />
                      <Text style={styles.label}>Password</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Eneter your Password"
                      />
                      <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Sign in</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialAuth}>
                        <Text style={styles.socialTitle}>You can Connect with</Text>
                        <View style={styles.authLogo}>
                          <TouchableOpacity>
                            <Image
                                style={styles.socIcon}
                                source={require('../../../assets/Facebook.png')} 
                              />
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Image
                                style={styles.socIcon}
                                source={require('../../../assets/Google.png')} 
                              />
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Image
                                style={styles.apple}
                                source={require('../../../assets/Apple.png')} 
                              />
                          </TouchableOpacity>
                        </View>
                        <Text>Don’t have an account? Sign Up here</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
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
  inputBox: {
    flex: .4, 
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
