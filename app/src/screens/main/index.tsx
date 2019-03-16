import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	StatusBar,
	Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon2 from 'react-native-vector-icons/dist/Feather';
import { SearchBar, Icon } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';
import { LEFT_GRADIENT, RIGHT_GRADIENT } from '../../constants';
import { Card } from '../../components';

interface IProps {
	navigation: NavigationScreenProp<NavigationState>;
}

export default class Main extends React.Component<IProps> {
	public state = {
		search: '',
		items: [
			{
				title: 'Green mile',
				available: false,
				inFav: true
			},
			{
				title: 'Green mile',
				available: true,
				inFav: true
			},
			{
				title: 'Green mile',
				available: false,
				inFav: false
			},
			{
				title: 'Green mile',
				available: true,
				inFav: false
			},
			{
				title: 'Green mile',
				available: true,
				inFav: true
			},
			{
				title: 'Green mile',
				available: true,
				inFav: false
			}
		]
	};

	public render() {
		const {
			container,
			gradient,
			rightIcon,
			header,
			gridView,
			addButton
		} = styles;
		const { search, items } = this.state;
		return (
			<React.Fragment>
				<View style={container}>
					<StatusBar
						translucent={true}
						backgroundColor="transparent"
						barStyle="dark-content"
					/>
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
								borderRadius: 10
							}}
						/>
					</LinearGradient>
				</View>
				<FlatGrid
					itemDimension={160}
					items={items}
					style={gridView}
					spacing={10}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							available={item.available}
							inFav={item.inFav}
						/>
					)}
				/>
				<Icon
					raised={true}
					name="add"
					type="materialicons"
					color="white"
					containerStyle={addButton}
					onPress={() => this.props.navigation.navigate('AddBook')}
					underlayColor={'#35daaa'}
				/>
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
		height: Platform.OS === 'ios' ? 150 : 165
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
	},
	gridView: {
		marginTop: 0,
		flex: 1,
		paddingTop: Platform.OS === 'ios' ? 35 : 20,
		backgroundColor: '#fff'
	},
	addButton: {
		position: 'absolute',
		bottom: 15,
		right: 15,
		backgroundColor: '#35d8a6'
	}
});
