import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import Header from './src/components/Header';
import InputField from './src/components/InputField';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <InputField placeholder={"Name"}/>
        <InputField placeholder={"Email"}/>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F5F5F5',
  },

  loginButton: {
    backgroundColor: '#356899',
    height: 56, // Set the height here
    // width: 327, // Set the width here
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', // Center vertically
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
