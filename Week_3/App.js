import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.style1}>
        <Image
          style={styles.logo}
          source={require("./pic/Ellipse 8.png")}
        ></Image>
      </View>
      <View style={styles.style2}>
        <Text style={styles.slogan}>GROW YOUR BUSSINESS</Text>
      </View>
      <View style={styles.style3}>
        <Text style={styles.text1}>
          We will help you to grow your business using online server
        </Text>
        <View style={styles.button}>
          <Button
            title="Login"
            color="#E3C000"
            style={styles.b}
          />
          <Button 
          title="Sign up" 
          color="#E3C000"
          style={styles.b}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
    alignItems: "center",
    justifyContent: "center",
  },
  style1: {
    flex: 1,
  },
  style2: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  style3: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  b: {
    width: "119px",
    height: "48px",
    alignItems: 'center'
  },
  logo: {
    width: "140px",
    height: "140px",
    justifyContent: "center",
    marginTop: "105px",
  },
  slogan: {
    fontFamily: "Roboto-Black",
    fontSize: "25px",
    lineHeight: "29.3px",
    textAlign: "center",
    width: "100%",
    height: "58px",
    fontWeight: "bold",
    marginTop: "87px",
    alignContent: "center",
  },
  text1: {
    width: "302px",
    height: "36px",
    fontFamily: "Roboto-Black",
    fontWeight: "700",
    fontSize: "15",
    lineHeight: "17.58px",
    textAlign: "center",
    alignContent: "flex-end",
  },
});
