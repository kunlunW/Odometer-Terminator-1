import React from 'react';
import { Alert, AppRegistry, StyleSheet, TextInput, Image, Text, View, Button, TouchableOpacity} from 'react-native';


class Register0 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {    
        username: '',
        password: '',
    }
  }
  
  userRegistration = () =>{
 
    const {username} = this.state;
    const {password} = this.state;   

    fetch('http://localhost:8080/odometer_terminator/user_registration.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username, 
          password: password,    
        })
    }).then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson);   
        }).catch((error) => {
          console.error(error);
        });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
            style= {styles.backgroundImage}
          source= {require('./assets/bg.png')}
        />
        <Text style={styles.titleText}>Register Your Odometer Terminator Account...</Text>
        <TextInput
          keyboardType = 'default'
          onChangeText={(username) => this.setState({ username })}
          placeholder='username'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          onChangeText={(password) => this.setState({ password })}
          placeholder='password'
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={this.userRegistration}
            >
            <Text style={styles.buttonText}> Register </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>
                this.props.navigation.navigate('Login')}
            >
            <Text style={styles.buttonText}> Back </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>
                this.props.navigation.navigate('Register1')}
            >
            <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText:{
      fontFamily: 'Courier',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: -10,
      textAlign: 'left',
      marginBottom: 50,
      marginRight: 20
    },
    backgroundImage:{
      position: 'absolute',
      justifyContent: 'center',
      top: null,
      left: null,
      bottom: null,
      right: null,
      opacity: 1.0,
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'powderblue',
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 25,
      marginBottom: 10,
    },
    buttonText:{
      fontFamily: 'Courier',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      fontFamily: 'Courier',
      fontSize: 20,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'white',
      marginBottom: 20
    },
  });

export default Register0;