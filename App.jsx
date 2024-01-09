import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>Dhanish Patel Full Stack Developer</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Dhanish Patel Full Stack Developer</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Text>Dhanish Patel Full Stack Developer</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection:"row", 
    color:"#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color:"red",
    flex:1
  }
});
