import {View, TouchableOpacity, Text} from 'react-native';
import { Colors } from '../../../utils/theme';
import styles from './styled';
import { staticText } from '../../../utils/staticTexts';
import { useState } from 'react';

const ColorSelection = () => {
  const [selectedColor, setSelectedColor] = useState<string>('color1');

     const handleColorChange = (color: string) => {
       setSelectedColor(color);
     };
  return (
		<View style={styles.section}>
			<View style={styles.colorSelection}>
				<TouchableOpacity
					style={[
						styles.radioButton,
						selectedColor === 'color1' && styles.radioButtonSelected,
						{ backgroundColor: Colors.black },
					]}
					activeOpacity={0.8}
					onPress={() => handleColorChange('color1')}
				/>
				<TouchableOpacity
					style={[
						styles.radioButton,
						selectedColor === 'color2' && styles.radioButtonSelected,
						{ backgroundColor: Colors.background },
					]}
					activeOpacity={0.8}
					onPress={() => handleColorChange('color2')}
				/>
				<TouchableOpacity
					style={[
						styles.radioButton,
						selectedColor === 'color3' && styles.radioButtonSelected,
						{ backgroundColor: Colors.secondary },
					]}
					activeOpacity={0.8}
					onPress={() => handleColorChange('color3')}
				/>
				<Text
					style={{
						color: Colors.lighGrayColor,
						fontWeight: 'bold',
						marginLeft: 10,
					}}>
					{staticText.COLOR}
				</Text>
			</View>
		</View>
	);
}
export default ColorSelection;
