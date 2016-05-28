/**
 * Created by abhisheksingh on 28/05/16.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import Auth0Lock from 'react-native-lock';
var lock = new Auth0Lock({clientId: "Your_clientId", domain: "your_domain"});

export default class myApp extends Component {
    _onShowLock= () =>{
        lock.show({
            connections: ["google-oauth2", "facebook", "twitter"],
            closable: true,
            authParams: {
                scope: "openid email offline_access",
            },
        }, (err, profile, token) => {
            if (err) {
                console.log(err);
                return;
            }
            this.setState({
                token: token,
                profile: profile,
                logged: true,
            });
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to The Awesomest App ever!
                </Text>
                <TouchableHighlight style={styles.actionButton} onPress={this._onShowLock}>
                    <Text style={styles.actionButtonText}>Login</Text>
                </TouchableHighlight>
            </View>
        );
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
    actionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        paddingHorizontal:40,
        paddingVertical:10,
        borderRadius: 5
    },
    actionButtonText: {
        color: '#ffffff',
        fontSize: 40
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

