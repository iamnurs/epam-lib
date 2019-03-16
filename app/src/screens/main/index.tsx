import React from 'react';
// import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon2 from 'react-native-vector-icons/dist/Feather';
import { SearchBar } from 'react-native-elements';
import { LEFT_GRADIENT, RIGHT_GRADIENT } from '../../constants';

// interface IProps {
// navigation: NavigationScreenProp<NavigationState>;
// }

export default class Main extends React.Component {
	public state = {
		search: ''
	};

	public render() {
		const { container, gradient, rightIcon, header } = styles;
		const { search } = this.state;
		return (
			<React.Fragment>
				<View style={container}>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						colors={[LEFT_GRADIENT, RIGHT_GRADIENT]}
						style={gradient}
					>
						<TouchableOpacity style={rightIcon}>
							<Icon2 name="filter" size={23} color="white" />
						</TouchableOpacity>
						<Text style={header}>Все книги</Text>
						<SearchBar
							placeholder="Поиск"
							onChangeText={this.updateSearch}
							value={search}
							lightTheme={true}
							containerStyle={{
								backgroundColor: 'transparent',
								borderTopColor: 'transparent',
								borderBottomColor: 'transparent',
								margin: 5
							}}
							inputStyle={{
								backgroundColor: 'white',
								borderRadius: 10,
								height: 30
							}}
						/>
					</LinearGradient>
				</View>
			</React.Fragment>
		);
	}

	private updateSearch = search => {
		this.setState({ search });
	};
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 150
	},
	gradient: {
		flex: 1,
		width: '100%',
		paddingTop: 30,
		shadowColor: 'black',
		shadowOffset: {
			width: 100,
			height: 100
		}
	},
	rightIcon: {
		alignSelf: 'flex-end',
		marginRight: 15
	},
	header: {
		color: 'white',
		fontSize: 34,
		fontWeight: 'bold',
		marginLeft: 15
	}
});
