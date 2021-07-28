import React from "react";
import Routes from "./src/routes";
import { AuthProvider } from "./src/routes/context";
import {withAuthenticator} from 'aws-amplify-react-native';

const App = ()=>{
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default withAuthenticator(App);