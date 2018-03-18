import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';


export default class Demo extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      dataSource : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    }
  }
  
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(obj)=>
        <View>
          <Image 
            source={{uri : obj.url + '.png'}}
            style={styles.image}
          />
          <Text>{obj.name}</Text>
        </View>
        }
      />
    );
  }

  componentDidMount(){
    fetch('http://192.168.1.170:1111/')
    .then((res)=> res.json())
    .then((resJSON) => {
      this.setState({
        dataSource : this.state.dataSource.cloneWithRows(resJSON),
      });
    })
    .catch((err)=>{
      console.error(err);
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image : {
    height: 70,
    width : 70,
  }
});
