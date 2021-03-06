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
import { connect } from 'react-redux';
import { isObservableMap } from 'mobx';
// interface IProps {
// navigation: NavigationScreenProp<NavigationState>;
// }
const mapStateToProps = state => ({
	books: state.books,
	user: state.user
});

class Library extends React.Component {
	public state = {
		selected: true,
		given: [],
		taken: []
	};

	public componentDidMount() {
		const { user, books } = this.props;
		const taken = books.books.filter(
			item =>
				item.tenant._id === user.user._id && item.owner._id !== user.user._id
		);
		const given = books.books.filter(
			item =>
				item.owner._id === user.user._id && item.tenant._id !== user.user._id
		);
		this.setState({ taken, given });
	}

	public render() {
		const { segmentControl, container, gridView } = styles;
		const { selected, taken, given } = this.state;
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
					items={selected ? taken : given}
					style={gridView}
					spacing={10}
					renderItem={({ item }) => (
						<Card
							uri={'https:' + item.image}
							title={item.title}
							available={item.owner !== item.tenant}
							inFav={false}
							onPress={() =>
								this.props.navigation.navigate('BookInfo', { item })
							}
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
		marginTop: 20,

		marginBottom: 5
	},
	gridView: {
		marginTop: 0,
		flex: 1,
		paddingTop: Platform.OS === 'ios' ? 35 : 20
	}
});

export default connect(
	mapStateToProps,
	null
)(Library);
