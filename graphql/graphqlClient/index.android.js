/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class graphqlClient extends Component {
  constructor() {
      super()
      this.state = {
        text: null
      }
    }

    componentDidMount() {
      fetch('http://192.168.40.29:4040/graphql', {
        method: 'POST',
        headers: {
          'content-type': 'application/graphql',
        },
        body: '{ hello }'
      })
      .then((response) => {
        console.log('result',response)
        const data = JSON.parse(response._bodyText)
        this.setState({
          text: data.data.hello
        })
      })
      .catch(err => console.log(err))
    }


    render() {
      return (
          <View style={styles.container} >
            {
              this.state.text ?
            <View>
            <TouchableOpacity>
              <Text  >
                Click On Me!
              </Text>
            </TouchableOpacity>
              <Text >
                {this.state.text}
              </Text>
            </View>
            : <View><Text>Loading...</Text></View>
          }
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
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

AppRegistry.registerComponent('graphqlClient', () => graphqlClient);
