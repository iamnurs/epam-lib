import React from 'react';
// import { NavigationScreenProp, NavigationState } from 'react-navigation';
import {
	StyleSheet,
	View,
	FlatList,
	Modal,
	Text,
	TouchableOpacity,
	Image
} from 'react-native';

import { connect } from 'react-redux';
import { NotifyInfo, Header, Button } from '../../components';
// interface IProps {
// navigation: NavigationScreenProp<NavigationState>;
// }

const mapStateToProps = state => ({
	user: state.user,
	books: state.books
});

class Notification extends React.Component {
	public state = {
		modalVisible: false,
		data: []
	};

	public componentDidMount = async () => {
		const requests = this.props.user.user.requests;
		const url = 'https://epam-lib.herokuapp.com/api/users';
		const response = await fetch(url);
		const users = await response.json();
		const data = await requests.forEach(request =>
			users.forEach(user => {
				if (request.user === user._id) {
					return user.books.forEach(book => {
						if (book._id === request.book) {
							return {
								name: user.name,
								location: user.location,
								title: book.title,
								uri: user.image
							};
						}
					});
				}
			})
		);

		await requests.forEach(request => {
			users.forEach(user => {
				if (request.user === user._id) {
					user.books.forEach(book => {
						if (book._id === request.book) {
							console.warn(user.name, user.location, book.title, user.image);
						}
					});
				}
			});
		});

		console.warn(requests);
	};

	public render() {
		const {
			container,
			modalWrapper,
			photo,
			name,
			location,
			wants,
			book,
			buttons,
			button,
			accept,
			decline
		} = styles;
		return (
			<View style={container}>
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.modalVisible}
					presentationStyle="overFullScreen"
				>
					<View style={{ flex: 1, backgroundColor: 'rgba(80,92,98,0.8)' }}>
						<View style={modalWrapper}>
							<Image source={require('../../assets/photo.jpg')} style={photo} />
							<Text style={name}>Нурсултанио</Text>
							<Text style={location}>Астана, Казахстан</Text>
							<Text style={wants}>Хочет взять у Вас книгу</Text>
							<Text style={book}>Зеленая Миля</Text>
							<View style={buttons}>
								<TouchableOpacity>
									<View
										style={[
											button,
											{ borderLeftWidth: 0, borderRightWidth: 0.5 }
										]}
									>
										<Text style={accept}>Принять</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View
										style={[
											button,
											{ borderRightWidth: 0, borderLeftWidth: 0.5 }
										]}
									>
										<Text style={decline}>Отказать</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>
				<Header headerText="Уведомления" />
				<FlatList
					renderItem={() => <NotifyInfo />}
					data={[1, 2, 3, 4, 5, 6]}
					keyExtractor={(key, index) => index.toString()}
				/>
				<Button title="button" onPress={this.setModalVisible} />
			</View>
		);
	}
	private setModalVisible = () => {
		this.setState(prevState => {
			return { modalVisible: !prevState.modalVisible };
		});
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: '#fff'
	},
	modalWrapper: {
		height: 222,
		width: 274,
		borderRadius: 16,
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: '50%',
		backgroundColor: 'white'
	},
	photo: {
		height: 120,
		width: 120,
		borderRadius: 60,
		marginTop: -60
	},
	name: {
		fontSize: 22,
		fontWeight: 'bold',
		marginTop: 5
	},
	location: {
		fontSize: 13,
		color: 'rgb(149,152,154)'
	},
	wants: {
		fontSize: 15,
		color: 'rgb(149,152,154)',
		marginTop: 8
	},
	book: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	buttons: {
		flexDirection: 'row',
		height: '100%',
		marginTop: 10
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		height: 100,
		width: 137,
		borderBottomWidth: 0,
		borderColor: 'rgba(80,92,98,0.13)'
	},
	accept: {
		color: 'rgb(53, 213, 172)',
		fontSize: 13,
		fontWeight: 'bold'
	},
	decline: {
		color: 'rgb(255,65,65)',
		fontSize: 13,
		fontWeight: 'bold'
	}
});
export default connect(mapStateToProps)(Notification);
