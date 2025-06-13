import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { db } from '../../configs/firebase';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { styles } from '../../styles/style';
import { Button } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';
import { useNavigation, CommonActions } from '@react-navigation/native';



const income = () => {

    const navigation = useNavigation();



    const { id } = useLocalSearchParams();

    const [income, setIncome] = useState(null)



    useEffect(() => {
        const fetchIncome = async () => {
            const ref = doc(db, 'incomeList', id);

            const snapshot = await getDoc(ref);
            if (snapshot.exists()) {
                setIncome(snapshot.data());

            }

        };
        fetchIncome();
    }, [id]);


    if (!income) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }



    const deleteIncome = async (id) => {
        try {
            const docRef = doc(db, "incomeList", id);
            await deleteDoc(docRef);

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'index' }],
                })
            );
        } catch (error) {
            console.error("Error deleting income: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.balance}>
                <View style={{ marginLeft: 50 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon source="cash" size={60} color={MD3Colors.primary0} />
                        <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 10 }}>Date: {income.date.toDate().toLocaleDateString()}</Text>
                    </View>

                    <Button icon="delete" mode="contained" style={styles.deleteButton} textColor="white" onPress={() => { deleteIncome(id) }}>
                        Delete Income</Button>
                </View>
            </View>
        </View>
    )
}

export default income