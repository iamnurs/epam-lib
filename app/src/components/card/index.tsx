import React, { SFC } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ViewProps,
	ImageStyle,
	TouchableOpacity
} from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Icon2 from 'react-native-vector-icons/Feather';

interface IProps extends ViewProps {
	navigation: NavigationScreenProp<NavigationState>;
}

const Card: SFC<IProps> = props => {
	const { title, available, inFav } = props;
	const { image, favs, titleStyle, availableStyle } = styles;
	return (
		<View style={{ alignSelf: 'center', marginTop: -30 }}>
			<Image
				source={{
					uri:
						'https://d1b14unh5d6w7g.cloudfront.net/0062413406.01.S001.LXXXXXXX.jpg?Expires=1552832014&Signature=OM/4p5W+Ylyn5OegEZFAHSy3OM5MjNzCMN+ZB3s9xQxF1ROt/FfcIB25xeg1a6uKdanh1rHbhCN3Y/PW+v+12Xqmo6ymetSnKUFTxJG5MiqNJ3J1jIlhjAoUGNYZW9s8fSNllm0e2wD2ZpM9kXsmyKtnHXD0EKWplrILgH24z1U=&Key-Pair-Id=APKAIUO27P366FGALUMQ'
				}}
				style={image as ImageStyle}
			/>

			<Text style={titleStyle}>{title}</Text>
			<Text
				style={[availableStyle, { color: available ? '#35d5ac' : '#ff3b58' }]}
			>
				{available ? 'Available' : 'Not in stock'}
			</Text>
			<TouchableOpacity style={favs}>
				<Icon2
					name="bookmark"
					size={23}
					color={!inFav ? '#95989a' : '#35d5ac'}
				/>
			</TouchableOpacity>
		</View>
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
