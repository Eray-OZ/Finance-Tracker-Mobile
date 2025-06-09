import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

import { db } from "../configs/firebase.js";
import { styles } from '../styles/style.js';

import Title from "./components/Title.jsx";




const AddIncome = () => {

    const navigation = useNavigation();

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);




    const addIncome = async () => {


        await addDoc(collection(db, 'incomeList'), {
            description: description,
            amount: parseFloat(amount),
            date: Timestamp.now()
        });


        setDescription("");
        setAmount("");

        navigation.navigate("BarGraph");
    }



    return (
        <View style={styles.container}>

            <Title>Add Income</Title>

            <View style={styles.inputArea}>



                <TextInput
                    style={styles.input}
                    placeholder='Description'
                    value={description}
                    onChangeText={setDescription} />

                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder='Amount'
                    value={amount}
                    onChangeText={setAmount} />

            </View>

            <Button icon="plus" mode='contained' style={styles.button} onPress={addIncome} textColor='black'>Submit</Button>

        </View>
    )


}


export default AddIncome