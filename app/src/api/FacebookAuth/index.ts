import { LoginButton, AccessToken, LoginManager } from "react-native-fbsdk";

const facebookAuth = () => {
  LoginManager.logInWithReadPermissions(["public_profile"])
    .then(result => {
      if (result.isCancelled) {
        console.warn("Login cancelled");
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          console.warn(data.accessToken.toString());
        });
      }
    })
    .catch(error => {
      console.warn("Login fail with error: " + error);
    });
};

export default facebookAuth;
