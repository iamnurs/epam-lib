import React, { SFC } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon2 from 'react-native-vector-icons/dist/Feather';
import { LEFT_GRADIENT, RIGHT_GRADIENT } from '../../constants';

// import { NavigationScreenProp, NavigationState } from 'react-navigation';

// interface IProps extends ViewProps {
// 	navigation: NavigationScreenProp<NavigationState>;
// }

const Header = props => {
	const {
		container,
		gradient,
		leftIcon,
		headerText,
		backText,
		rightIcon
	} = styles;
	return (
		<View style={container}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={[LEFT_GRADIENT, RIGHT_GRADIENT]}
				style={gradient}
			>
				{props.onBack ? (
					<TouchableOpacity style={leftIcon}>
						<Icon name="chevron-thin-left" size={21} color="white" />
						<Text style={backText}>Назад</Text>
					</TouchableOpacity>
				) : null}
				<Text style={headerText}>{props.headerText}</Text>
				{props.download ? (
					<TouchableOpacity style={rightIcon}>
						<Icon2 name="download" size={23} color="white" />
					</TouchableOpacity>
				) : null}
				{props.bookmark ? (
					<TouchableOpacity style={rightIcon}>
						<Icon2 name="bookmark" size={23} color="white" />
					</TouchableOpacity>
				) : null}
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 64
	},
	gradient: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-end',
		shadowColor: 'black',
		shadowOffset: {
			width: 100,
			height: 100
		}
	},
	leftIcon: {
		position: 'absolute',
		left: 5,
		bottom: 11.5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	rightIcon: {
		position: 'absolute',
		right: 10,
		bottom: 11.5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	backText: {
		color: 'white',
		fontSize: 17
	},
	headerText: {
		marginBottom: 12,
		fontSize: 17,
		color: 'white',
		fontWeight: 'bold'
	}
});

export default Header;
