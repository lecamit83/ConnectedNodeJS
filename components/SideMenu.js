import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import Drawer from 'react-native-drawer';
import MainView from './MainView';
import ControlView from './ControlView';

export default class SideMenu extends Component {

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render(){
        return(
            <Drawer
                type="overlay"
                ref={(ref) => this._drawer = ref}
                content={<ControlView />}
                openDrawerOffset={0.2}
                tapToClose={true}
            >
            <View style={styles.container} >
                <TouchableOpacity 
                    onPress={this.openControlPanel.bind(this)}
                >
                    <Text>
                        open menu
                    </Text>
                </TouchableOpacity>
            </View>
          </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'red',
    }
});