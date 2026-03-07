import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* 1. Header Section */}
      {/* 1. Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/Login.webp")}
          style={styles.image}
        />
      </View>
      {/* 2. Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} placeholder="john@gmail.com" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="********"  secureTextEntry  />

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}></Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="" size={30} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="" size={30} color="#4267B2" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text></Text>
          <TouchableOpacity>
            <Text style={styles.linkText}></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7D7AFF',
        paddingTop: 40,
    },
    header:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
      width: '80%',
      height: '70%',
    },
    formContainer: {
      flex: 1,
      backgroundColor: '#FFF',
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
      padding:30,
    },
    label:{
      fontSize: 14,
      marginBottom: 5,
      marginTop: 15,
      color: '#666',

    },
    input: {
      backgroundColor: '#F0F0F0',
      borderRadius: 15,
      padding: 15,
      fontSize: 16,
    },
    forgotText: {
      alignSelf: 'flex-end',
      color: '#666',
      marginTop: 10,
    },
});