import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home.js";
import AppLoading from "expo-app-loading";
import Navigator from './routes/drawer.js';

const getFonts = async() => {
  console.log("Async function started");
  await Font.loadAsync({
    "lobster-regular": require("./assets/fonts/Lobster-Regular.ttf"),
  });
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoaded(true)}
        onError={(error)=> console.warn(error)}
      />
    );
  }
}
