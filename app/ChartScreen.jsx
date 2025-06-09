import { View } from 'react-native'
import { BarGraph } from './components/BarGraph.jsx'
import { styles } from '../styles/style.js'




const ChartScreen = () => {
    return (
        <View style={styles.container}>
            <BarGraph />
        </View>
    )
}

export default ChartScreen