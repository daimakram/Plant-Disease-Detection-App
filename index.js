/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Amplify from 'aws-amplify';
import App from './App';
import {name as appName} from './app.json';
import awsconfig from './src/aws-exports';

// planty IAM name
// AKIAYWD4257O5IX6FCSW  #ACCESSID
// UFxQ7M0+4qmKOT/0imBoOcdck7i3iozSDzEVp995 #ACCESSSID

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

AppRegistry.registerComponent(appName, () => App);
