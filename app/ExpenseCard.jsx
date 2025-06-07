import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { DataTable } from 'react-native-paper';


import { db } from "../configs/firebase.js";
import { styles } from '../styles/style';

import Title from "./Title.jsx";


const ExpenseCard = () => {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([4, 5, 6]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );


  const [items, setItems] = useState([]);



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

    // Bileşen unmount olursa dinlemeyi durdur
    return () => unsubscribe();
  }, []);


  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>

      <Title>Your Expenses</Title>


      <View style={styles.table}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Category</DataTable.Title>
            <DataTable.Title>Description</DataTable.Title>
            <DataTable.Title>Amount</DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{item.category}</DataTable.Cell>
              <DataTable.Cell>{item.description}</DataTable.Cell>
              <DataTable.Cell>{item.amount}</DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${items.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Rows per page'}
          />
        </DataTable>
      </View >
    </View >
  );
};

export default ExpenseCard;