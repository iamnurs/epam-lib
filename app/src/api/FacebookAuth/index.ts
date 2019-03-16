import { AccessToken, LoginManager } from 'react-native-fbsdk';

const facebookAuth = async () => {
	const res = await LoginManager.logInWithReadPermissions(['public_profile']);
	if (res.isCancelled) {
		return 'Login cancelled';
	}
	const token = await AccessToken.getCurrentAccessToken();
	const ans = await token.accessToken.toString();
	return ans;
};

export default facebookAuth;
