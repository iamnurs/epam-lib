import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

// import { NavigationScreenProp, NavigationState } from 'react-navigation';

// interface IProps extends ViewProps {
// 	navigation: NavigationScreenProp<NavigationState>;
// }

export default class SegmentControl extends React.Component {
	public render() {
		const { container, controller, textStyle } = styles;
		const { first, second, selected, onPress } = this.props;
		return (
			<View style={container}>
				<TouchableWithoutFeedback onPress={() => onPress('true')}>
					<View
						style={[
							controller,
							{
								borderTopRightRadius: 0,
								borderBottomRightRadius: 0,
								borderRightWidth: 0.5,
								backgroundColor: selected ? '#35d5ac' : 'white'
							}
						]}
					>
						<Text
							style={[textStyle, { color: !selected ? '#464547' : 'white' }]}
						>
							{first}
						</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={() => onPress('')}>
					<View
						style={[
							controller,
							{
								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
								borderLeftWidth: 0.5,
								backgroundColor: !selected ? '#35d5ac' : 'white'
							}
						]}
					>
						<Text
							style={[textStyle, { color: selected ? '#464547' : 'white' }]}
						>
							{second}
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '90%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#0099ff',
		shadowOpacity: 0.5,
		shadowRadius: 1,
		shadowOffset: {
			height: 1,
			width: 0
		},
		elevation: 5
	},
	controller: {
		borderWidth: 1,
		borderColor: '#5fe5bc',
		borderRadius: 5,
		flex: 1,
		height: 49,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	textStyle: {
		fontSize: 17
	}
});
