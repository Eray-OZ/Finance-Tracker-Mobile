import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { db } from '../../configs/firebase';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { styles } from '../../styles/style';
import { Button } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';
import { useNavigation, CommonActions } from '@react-navigation/native';



const expense = () => {

    const navigation = useNavigation();


    const categoryIconMap = {
        food: 'food-drumstick',
        transport: 'bus',
        shopping: 'shopping',
        bill: 'wallet',
        rent: 'home-analytics',
        'ent.': 'nintendo-game-boy',
        other: 'minus-circle',
    };

    const { id } = useLocalSearchParams();

    const [expense, setExpense] = useState(null)

    const [icon, setIcon] = useState(categoryIconMap.other)


    useEffect(() => {
        const fetchExpense = async () => {
            const ref = doc(db, 'expenseList', id);

            const snapshot = await getDoc(ref);
            if (snapshot.exists()) {
                setExpense(snapshot.data());
                const selectedIcon = categoryIconMap[snapshot.data().category]
                setIcon(selectedIcon)
            }

        };
        fetchExpense();
    }, [id]);


    if (!expense) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }



    const deleteExpense = async (id) => {
        try {
            const docRef = doc(db, "expenseList", id);
            await deleteDoc(docRef);

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'index' }],
                })
            );
        } catch (error) {
            console.error("Error deleting expense: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.balance}>
                <View style={{ marginLeft: 50 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon source={icon} size={60} color={MD3Colors.primary0} />
                        <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 10 }}>Date: {expense.date.toDate().toLocaleDateString()}</Text>
                    </View>

                    <Button icon="delete" mode="contained" style={styles.deleteButton} textColor="white" onPress={() => { deleteExpense(id) }}>
                        Delete Expense</Button>
                </View>
            </View>
        </View>
    )
}

export default expense