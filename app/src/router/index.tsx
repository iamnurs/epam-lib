import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import {
	createBottomTabNavigator,
	createSwitchNavigator,
	StackNavigator
} from 'react-navigation';

import {
	LogIn,
	SignUp,
	Main,
	Initial,
	Library,
	Profile,
	Notification
} from '../screens';

const TabBar = createBottomTabNavigator(
	{
		Main: {
			screen: Main,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon2 name="book" size={26} color={tintColor} />
				)
			}
		},
		Library: {
			screen: Library,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon4 name="book" size={24} color={tintColor} />
				)
			}
		},
		Notification: {
			screen: Notification,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon4 name="bell-o" size={22} color={tintColor} />
				)
			}
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon name="user" size={24} color={tintColor} />
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
