import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ListView
} from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
  }

  _sendData() {
    var datas = {
      username: this.state.email,
      password: this.state.pass
    };
    fetch("http://api.hifapp.com/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(datas)
    })
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON);
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogin}>
          <TextInput
            placeholder="Typing Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            placeholder="Typing Password"
            onChangeText={pass => this.setState({ pass })}
            value={this.state.pass}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.btnSend}
            onPress={this._sendData.bind(this)}
          >
            <Text>SEND!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  componentDidMount() {}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  btnSend: {
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 5
  },
  btnText: {
    fontSize: 20
  },
  containerLogin: {
    flex: 3,
    justifyContent: "center"
  },
  containerDB: {
    flex: 8,
    backgroundColor: "pink"
  }
});
