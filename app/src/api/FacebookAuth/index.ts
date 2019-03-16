import { AccessToken, LoginManager } from 'react-native-fbsdk';

const facebookAuth = async () => {
	const baseURL = 'https://epam-lib.herokuapp.com/api';
	const res = await LoginManager.logInWithReadPermissions(['public_profile']);
	if (res.isCancelled) {
		return 'Login cancelled';
	}
	const tokenFromFb = await AccessToken.getCurrentAccessToken();
	const tokenToString = await tokenFromFb.accessToken.toString();
	const token = await fetch(baseURL + `/users/facebook/token`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${tokenToString}`
		}
	});
	const response = await token.json();
	return response.token;
};

export default facebookAuth;
