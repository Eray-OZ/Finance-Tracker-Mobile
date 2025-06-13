import { View } from "react-native";
import { styles } from "../../styles/style";
import { SegmentedButtons } from "react-native-paper";
import { useState } from "react";




const BottomNav = () => {

    const [value, setValue] = useState("");



    return (
        <View style={styles.container}>


            <SegmentedButtons
                value={value}
                onValueChange={setValue}
                buttons={[
                    {
                        value: 'walk',
                        label: 'Walking',
                    },
                    {
                        value: 'train',
                        label: 'Transit',
                    },
                    {
                        value: 'drive',
                        label: 'Driving'
                    },
                ]}
            />
        </View>
    );
}



export default BottomNav