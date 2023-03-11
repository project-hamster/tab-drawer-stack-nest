import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { styles } from '../../../../global-style';

export default () => {
    return (
        <View style={styles.container}>
            <Text>index</Text>
            <Link href='/stack2'>to modal</Link>
        </View>
    )
}