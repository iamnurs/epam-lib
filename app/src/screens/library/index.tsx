import React from 'react';
// import { NavigationScreenProp, NavigationState } from 'react-navigation';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Platform
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Header, SegmentControl, Card } from '../../components';

// interface IProps {
// navigation: NavigationScreenProp<NavigationState>;
// }

export default class Library extends React.Component {
	public state = {
		selected: true,
		items1: [
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
		],
		items2: [
			{
				title: 'IDI NAHUI',
				available: false,
				inFav: true
			},
			{
				title: 'IDI NAHUI',
				available: true,
				inFav: true
			},
			{
				title: 'IDI NAHUI',
				available: false,
				inFav: false
			},
			{
				title: 'IDI NAHUI',
				available: true,
				inFav: false
			},
			{
				title: 'IDI NAHUI',
				available: true,
				inFav: true
			},
			{
				title: 'IDI NAHUI',
				available: true,
				inFav: false
			}
		]
	};

	public render() {
		const { segmentControl, container, gridView } = styles;
		const { selected, items1, items2 } = this.state;
		return (
			<View style={container}>
				<Header headerText="Библиотека" />
				<View style={segmentControl}>
					<SegmentControl
						first="Читаю"
						second="В Аренде"
						onPress={this.changeSelected}
						selected={selected}
					/>
				</View>
				<FlatGrid
					itemDimension={160}
					items={selected ? items1 : items2}
					style={gridView}
					spacing={10}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							available={item.available}
							inFav={item.inFav}

							onPress={() => this.props.navigation.navigate("BookInfo")}
						/>
					)}
				/>
			</View>
		);
	}

	private changeSelected = num => {
		this.setState({ selected: num === 'true' ? true : false });
	};
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1
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
	segmentControl: {
		alignItems: 'center',
		marginTop: 20
	},
	gridView: {
		marginTop: 0,
		flex: 1,
		paddingTop: Platform.OS === 'ios' ? 35 : 20
	}
});
