import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.title}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite seu email"
            placeholderTextColor="#fff"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.title}>Senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1d1d2e",
    padding: 24,
  },

  fieldContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  
    title: {
      color: "#fff",
      fontSize: 18,
      padding: 5,
    },
  
  inputContainer: {
      width: "100%",
      alignItems: "center",
      backgroundColor: "#6E6E83",
    justifyContent: 'center',
    color: "#fff"
  },

  input: {
    color: "#fff"
  },

  button: {
    backgroundColor: "#7474AD",
    width: "100%",
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontSize: 20,
    color: "#fff",
  },
});
