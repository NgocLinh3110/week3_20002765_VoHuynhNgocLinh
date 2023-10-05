import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function SecondScreen() {
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
        <View style={styles.flexContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.b}>LOGIN</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.b}>SIGN UP</Text>
          </Pressable>
          <Text style={styles.text2}>HOW WE WORK?</Text>
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
    width: "100%",
    height: "100%",
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
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  button: {
    width: 119,
    height: 48,
    borderRadius: "10px",
    backgroundColor: "#E3C000",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "30px",
  },
  b: {
    fontWeight: 700,
    color: "black",
    textAlign: "center",
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
  text2: {
    width: "302px",
    height: "53px",
    padding: "20px",
    fontFamily: "Roboto-Black",
    fontWeight: "700",
    fontSize: "18",
    lineHeight: "21.09px",
    textAlign: "center",
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
