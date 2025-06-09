import { Text, ScrollView, View } from 'react-native'
import { db } from '../configs/firebase.js'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { GEMINI_API_KEY } from "../constants/apiKey.js"
import { useEffect, useState } from 'react'
import { styles } from '../styles/style.js'
import Title from "./components/Title.jsx";
import { COLORS } from '../constants/color.js';


const key = GEMINI_API_KEY



const AnalysisScreen = () => {


    const [items, setItems] = useState([]);

    const [dataText, setDataText] = useState()

    const [prompt, setPrompt] = useState('')

    const [response, setResponse] = useState('')

    const [loading, setLoading] = useState(false)




    useEffect(() => {


        const q = query(
            collection(db, 'expenseList'),
            orderBy('date', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const newItems = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems(newItems);

        });

        return () => unsubscribe();
    }, []);



    const requestGemini = async () => {
        setLoading(true)

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [{
                                    text: prompt
                                }]
                            }
                        ]
                    })
                }
            )

            const data = await res.json()

            let geminiText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Yanıt alınamadı';

            geminiText = geminiText.replace(/\*/g, '')

            setResponse(geminiText)

        } catch (error) {
            console.error('Gemini API hatası:', error);
            setResponse('Bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        if (items.length === 0) return;

        const newDataText = items.map(item => (
            `Date: ${item.date.toDate().getMonth()}, Category: ${item.category}, Amount: ${item.amount}, Description: ${item.description || ''}`
        )).join('\n');

        setDataText(newDataText)


        const newPrompt = `
You are a financial analyst. Below are my monthly expense data. Please analyze this data,
Just answer the following questions, Do not perform any calculations or math operations, And please don't start with introduction like 'Okay, based on data here's your analysis':

1. In which category have I spent the most money?
2. Which expenses seem unnecessary?
3. Compare the differences in spending between months.
4. Give suggestions to help me save money.

Data:
${dataText}
`;
        setPrompt(newPrompt);


        requestGemini()

    }, [items]);






    return (
        <View style={styles.container}>


            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Analysis</Title>

                {loading ? (
                    <View style={{ marginTop: 20 }}>
                        <Text>Loading analysis...</Text>
                    </View>
                ) : (

                    <View style={styles.analysis}>
                        <Text style={{ fontSize: 17, color: COLORS.primary }}>{response}</Text>
                    </View>
                )}

            </ScrollView>
        </View>

    )
}

export default AnalysisScreen