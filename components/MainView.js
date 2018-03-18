import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,

} from 'react-native';

export default class SideMenu extends Component {
    render(){
        return(
            <View style={styles.container} >
                <TouchableOpacity 
                    
                >
                    <Text>
                        open menu
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'red',
    }
});