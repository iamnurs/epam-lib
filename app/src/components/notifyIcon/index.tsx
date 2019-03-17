import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

import Icon4 from "react-native-vector-icons/FontAwesome";

const mapStateToProps = state => ({
  user: state.user
});

class NotifyIcon extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Icon4 name="bell-o" size={22} color={this.props.tintColor} />
        {this.props.user.user.requests.length && (
          <Text style={styles.number}>
            {this.props.user.user.requests.length}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    position: "absolute",
    top: 2,
    right: -5,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#35daaa",
    borderRadius: 50,
    width: 18,
    height: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(mapStateToProps)(NotifyIcon);
