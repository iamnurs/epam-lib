import React, { SFC } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	Image,
	ViewProps,
	ImageStyle
} from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { facebookAuth } from '../../api';

interface IProps extends ViewProps {
	navigation: NavigationScreenProp<NavigationState>;
}

const SocButton: SFC<IProps> = props => {
	return (
		<View style={[styles.container, props.style]}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => authenticate(props.navigation)}
			>
				<Image
					source={require('../../assets/facebook.png')}
					style={styles.image as ImageStyle}
					resizeMode="contain"
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Image
					source={require('../../assets/google.png')}
					style={styles.image as ImageStyle}
				/>
			</TouchableOpacity>
		</View>
	);
};

const authenticate = async navigation => {
	const token = await facebookAuth();
	navigation.navigate('Main');
};

const styles = StyleSheet.create({
	button: {
		width: 125,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#95989a'
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	image: {
		width: 20,
		height: 20
	}
});

export default SocButton;