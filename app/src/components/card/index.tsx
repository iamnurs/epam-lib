import React, { SFC } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ViewProps,
	ImageStyle,
	TouchableOpacity,
	Platform
} from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Icon2 from 'react-native-vector-icons/FontAwesome';

interface IProps extends ViewProps {
	navigation: NavigationScreenProp<NavigationState>;
}

const Card: SFC<IProps> = props => {
	const { title, available, inFav, onPress = () => null, uri } = props;
	const { image, favs, titleStyle, availableStyle } = styles;
	return (
		<TouchableOpacity
			activeOpacity={1}
			style={{
				alignSelf: 'center',
				marginTop: Platform.OS === 'ios' ? -30 : -10
			}}
			onPress={onPress}
		>
			<Image source={{ uri }} style={image as ImageStyle} />

			<Text style={titleStyle}>{title}</Text>
			<Text
				style={[availableStyle, { color: available ? '#35d5ac' : '#ff3b58' }]}
			>
				{available ? 'Доступно' : 'Недоступно'}
			</Text>
			<TouchableOpacity style={favs} onPress={props.onFavPress}>
				<Icon2
					name={inFav ? 'bookmark' : 'bookmark-o'}
					size={23}
					color={!inFav ? '#95989a' : '#35d5ac'}
				/>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 125,
		height: 187.5,
		borderRadius: 5,
		margin: 10
	},
	favs: {
		position: 'relative',
		bottom: 30,
		left: 125
	},
	titleStyle: {
		fontSize: 13,
		color: '#464547',
		fontWeight: 'bold'
	},
	availableStyle: {
		fontSize: 11
	}
});

export default Card;
