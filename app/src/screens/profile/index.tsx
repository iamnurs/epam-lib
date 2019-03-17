import React from "react";
// import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, View, Image, Text, Platform } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Header, SegmentControl, Card, Button } from "../../components";
import { connect } from "react-redux";

// interface IProps {
// navigation: NavigationScreenProp<NavigationState>;
// }

const mapStateToProps = state => ({
  user: state.user,
  token: state.token
});

class Profile extends React.Component {
  public state = {
    selected: true
  };

  public render() {
    const {
      segmentControl,
      container,
      gridView,
      imageStyle,
      profileWrapper,
      name,
      profileInfo,
      buttonStyle,
      location
    } = styles;
    const { selected } = this.state;
    const arrname = this.props.user.user.name.split(" ");
    return (
      <View style={container}>
        <Header headerText="Профиль" />
        <View style={profileWrapper}>
          <Image source={{ uri: this.props.user.user.image }} style={imageStyle} />
          <View style={profileInfo}>
            <Text style={name}>{arrname[0]}</Text>
            <Text style={name}>{arrname[1]}</Text>
            <Text style={location}>{this.props.user.user.location}</Text>
            <Button
              title="Редактировать профиль"
              onPress={() => this.props.navigation.navigate("EditProfile")}
              style={buttonStyle}
            />
          </View>
        </View>

        <View style={segmentControl}>
          <SegmentControl
            first="Мои книги"
            second="Избранные"
            onPress={this.changeSelected}
            selected={selected}
          />
        </View>
        <FlatGrid
          itemDimension={160}
          items={selected ? this.props.user.user.books : this.props.user.user.favorites}
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
    this.setState({ selected: num === "true" ? true : false });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  gradient: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 100,
      height: 100
    }
  },
  rightIcon: {
    alignSelf: "flex-end",
    marginRight: 15
  },
  header: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginLeft: 15
  },
  segmentControl: {
    alignItems: "center",
    marginTop: 20
  },
  gridView: {
    marginTop: 0,
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 35 : 20
  },
  imageStyle: {
    height: 128,
    width: 128,
    borderRadius: 12
  },
  profileWrapper: {
    flexDirection: "row",
    margin: 20,
    marginBottom: 5
  },
  name: {
    fontSize: 24,
    color: "#464547",
    fontWeight: "bold"
  },
  profileInfo: {
    marginLeft: 20
  },
  buttonStyle: {
    height: 35,
    width: "115%",
    marginTop: 10
  },
  location: {
    fontSize: 16,
    color: "#78849e",
    marginTop: 5
  }
});
export default connect(mapStateToProps)(Profile);
