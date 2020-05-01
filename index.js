import {YellowBox,AppRegistry} from 'react-native';
import App from './src/App'


    
YellowBox.ignoreWarnings(['Remote debugger'])
AppRegistry.registerComponent('MyTestApp', () => App);
