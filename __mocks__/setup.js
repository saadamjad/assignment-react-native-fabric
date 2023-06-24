/** @format */

import 'react-native-gesture-handler/jestSetup';

import { NativeModules } from 'react-native';
NativeModules.RNFBAppModule = {};
NativeModules.FileReaderModule = {};
NativeModules.RNDeviceInfo = {};
NativeModules.RNCNetInfo = {};
jest.mock('@react-native-async-storage/async-storage');
jest.mock('@react-native-community/async-storage');

jest.mock('react-native-screens', () => ({
	...jest.requireActual('react-native-screens'),
}));
