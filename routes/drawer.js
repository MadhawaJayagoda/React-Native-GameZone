import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack.js";
import AboutStack from "./aboutStack.js";

const screens = {
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    }
}

const drawerNavigatorConfig = {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
        marginTop: 10,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: 'white',
      },
    },
    contentOptions: {
      // add your styling here
      activeTintColor: '#e91e63',
      padding: 50,
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
    drawerBackgroundColor: '#f0f0f0', // sets background color of drawer
  };

const RootDrawerNavigator = createDrawerNavigator(screens, drawerNavigatorConfig);

export default createAppContainer(RootDrawerNavigator);
