import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* 1. Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Let`s Get Started!</Text>
      </View>

      {/* 2. Middle Section */}
      <View style={styles.middleSection}>
        <Image
          source={require("../../assets/Welcome.png")}
          style={styles.image}
        />
      </View>

      {/* 3. Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7D7AFF',
        paddingTop: 80,
        paddingHorizontal: 30,
    },
    topSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: { 
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    middleSection: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',  
    },
    bottomSection: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
      },
      button: {
        backgroundColor: '#ffcc00',
        width: '100%',
        paddingVertical: 18,
        borderRadius: 15,
        marginBottom: 20,
      },
      buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 18,
      },
      loginContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      footerText: {

      },
      loginLink: {
        color: '#ffcc00',
        fontWeight: 'bold',
        fontSize: 15,
      },

});