/** @format */

import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage');
jest.mock('@react-native-community/async-storage');

jest.mock('react-native-screens', () => ({
	...jest.requireActual('react-native-screens'),
}));
