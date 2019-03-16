import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	createBottomTabNavigator,
	createSwitchNavigator,
	StackNavigator
} from 'react-navigation';

import { LogIn, SignUp, Main, Initial } from '../screens';

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

const AuthStack = StackNavigator(
	{
		Initial: {
			screen: Initial
		},
		LogIn: {
			screen: LogIn
		},
		SignUp: {
			screen: SignUp
		}
	},
	{
		cardStyle: {
			shadowColor: 'transparent'
		},
		navigationOptions: {
			headerStyle: {
				elevation: 0,
				shadowOpacity: 0
			}
		}
	}
);

const Router = createSwitchNavigator(
	{
		App: TabBar,
		Auth: AuthStack
	},
	{
		initialRouteName: 'App'
	}
);

export default Router;
