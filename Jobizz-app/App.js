import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import Header from './src/components/Header';
import InputField from './src/components/InputField';
import SocialLoginButton from './src/components/SocialLoginButton';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.inputSection}>
        <InputField placeholder={"Name"}/>
        <InputField placeholder={"Email"}/>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.dashLine}>
          <Text style={styles.dashText}>Or continue with</Text>
        </View>
        <View style={styles.socialButtons}>
          <SocialLoginButton source={require('./assets/apple.png')}/>
          <SocialLoginButton source={require('./assets/google.png')}/>
          <SocialLoginButton source={require('./assets/facebook.png')}/>
        </View>
        <Text style={styles.registerText}>
          Haven't an account? {' '}
          <Text style={styles.registerLink}>Register</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  inputSection: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  loginButton: {
    backgroundColor: '#356899',
    height: 56, 
    borderRadius: 5,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  dashLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  dashText: {
    backgroundColor: 'white',
    position: 'absolute',
    paddingHorizontal: 20,
    color: 'grey',
  },
  socialButtons: {
    flexDirection: 'row',
  },
  registerText: {
    color: 'grey',
  },
  registerLink: {
    color: '#356899',
  },
});
