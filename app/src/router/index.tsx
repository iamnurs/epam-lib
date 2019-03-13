import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  createBottomTabNavigator,
  createStackNavigator, createSwitchNavigator
} from "react-navigation";
import { LogIn, SignUp, Main } from "@screens";

const TabBar = createBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="map" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        height: 50
      },
      showLabel: false
    }
  }
);

const AuthStack = createStackNavigator({ LogIn, SignUp });

const Router = createSwitchNavigator(
  {
    App: TabBar,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

export default Router;
