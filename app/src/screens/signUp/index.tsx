import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	ActivityIndicator
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import { Input, Button, SocButton } from '../../components';
import { width } from '../../constants';
import { registerUser, facebookAuth } from '../../redux/ActionCreaters.js';

interface IProps {
	navigation: NavigationScreenProp<NavigationState>;
}

const mapStateToProps = state => ({
	user: state.user,
	token: state.token
});

const mapDispatchToProps = dispatch => ({
	registerUser: creds => dispatch(registerUser(creds)),
	facebookAuth: () => dispatch(facebookAuth())
});

class SignUp extends React.Component<IProps> {
	public state = {
		email: '',
		password: '',
		confirmPassword: '',
		name: '',
		number: ''
	};

	public render() {
		if (this.props.user.isAuthenticated) {
			this.props.navigation.navigate('App');
		}
		return (
			<View style={styles.container}>
				{this.props.user.isLoading ? (
					<View
						style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
					>
						<ActivityIndicator size="large" />
					</View>
				) : (
					<KeyboardAwareScrollView
						enableOnAndroid={true}
						keyboardDismissMode="interactive"
						contentContainerStyle={styles.scroll}
						showsVerticalScrollIndicator={false}
					>
						<StatusBar
							backgroundColor="#fff"
							barStyle="dark-content"
							translucent={false}
						/>
						<Text style={styles.title}>Регистрация</Text>
						<Input
							placeholder="Имя"
							text={this.state.name}
							onChangeText={text => this.setState({ name: text })}
							style={styles.input}
						/>
						<Input
							placeholder="E-mail"
							text={this.state.email}
							onChangeText={text => this.setState({ email: text })}
							style={styles.input}
						/>
						<Input
							placeholder="Номер"
							text={this.state.number}
							onChangeText={text => this.setState({ number: text })}
							style={styles.input}
						/>
						<Input
							placeholder="Пароль"
							text={this.state.password}
							onChangeText={text => this.setState({ password: text })}
							style={styles.input}
							secure={true}
						/>
						<Input
							placeholder="Подтвердите пароль"
							text={this.state.confirmPassword}
							onChangeText={text => this.setState({ confirmPassword: text })}
							style={styles.input}
							secure={true}
						/>
						<Button
							title="Зарегистрироваться"
							onPress={() =>
								this.props.registerUser({
									username: this.state.email,
									password: this.state.password,
									phoneNumber: this.state.number,
									name: this.state.name
								})
							}
							style={styles.button}
						/>
						<Text style={styles.plainText}>или</Text>
						<SocButton
							style={styles.button}
							navigation={this.props.navigation}
							fbauth={() => this.props.facebookAuth()}
						/>
						<View style={[styles.plainText, styles.textContainer]}>
							<Text>Есть аккаунт? </Text>
							<Text
								onPress={() => this.props.navigation.navigate('LogIn')}
								style={styles.pressText}
							>
								Войти.
							</Text>
						</View>
					</KeyboardAwareScrollView>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1
	},
	title: {
		color: '#19769f',
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'flex-start'
	},
	input: {
		marginTop: 10,
		height: 45
	},
	plainText: {
		color: '#95989a',
		fontSize: 15,
		marginTop: 10
	},
	right: {
		alignSelf: 'flex-end'
	},
	button: {
		marginTop: 10,
		width: width - 60
	},
	textContainer: {
		flexDirection: 'row'
	},
	pressText: {
		color: '#19769f'
	},
	scroll: {
		flexGrow: 1,
		justifyContent: 'center',
		paddingLeft: 30,
		paddingRight: 30,
		alignItems: 'center'
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);
