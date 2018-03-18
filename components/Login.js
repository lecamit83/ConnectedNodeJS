import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ListView,
    
} from 'react-native';


export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            pass : '',
            dataSource : new ListView.DataSource({rowHasChanged : (o1 , o2) => o1 !== o2})
        }
    }

    _sendData(){
        var datas = {
            username : this.state.email,
            password : this.state.pass
        };
        this.setState({
            email : '',
            pass  : ''
        });
        var formBody = [];
        
        for (var property in datas) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(datas[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        
        formBody = formBody.join("&");
        
        fetch('http://192.168.1.170:1111/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
        }).then((res) => res.json())
        .then((resJSON) => this.setState({
            dataSource : this.state.dataSource.cloneWithRows(resJSON)
        }))
        .catch((error) => console.error(error));
    }

    render(){
        return(
            <View style={styles.container} >
                <View style={styles.containerLogin} >
                    <TextInput 
                        placeholder='Typing Email'
                        onChangeText={(email)=>this.setState({email})}
                        value={this.state.email}
                    />
                    <TextInput 
                        placeholder='Typing Password'
                        onChangeText={(pass)=>this.setState({pass})}
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
                <View style={styles.containerDB}>
                    <ListView 
                        enableEmptySections={true}
                        dataSource = {this.state.dataSource}
                        renderRow={(obj)=>
                            <View>
                                <Text>{obj.user} + " - " + {obj.pass}</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
    componentDidMount(){
        fetch('http://192.168.1.170:1111/getlist')
        .then((res) => res.json())
        .then((resJSON) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(resJSON)
            })
        })
        .catch((err) =>console.error(err));
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
    },
    btnSend:{
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 5,
    },
    btnText :{
        fontSize: 20,
    },
    containerLogin: {
        flex : 3,
        justifyContent: 'center'
    },
    containerDB: {
        flex : 8,
        backgroundColor: 'pink',
    }

});