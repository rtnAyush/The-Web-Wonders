import { db } from "../firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const TableCollectionRef = collection(db, "timeTable");
class TableDataService {

    addTable = (newSubject) => {
        return addDoc(TableCollectionRef, newSubject);
    };

    updateTable = (id, updatedTable) => {
        const tableDoc = doc(db, "timeTable", id);
        return updateDoc(tableDoc, updatedTable);
    };

    // deleteBook = (id) => {
    //   const bookDoc = doc(db, "books", id);
    //   return deleteDoc(bookDoc);
    // };

    getAllTable = () => {
        return getDocs(TableCollectionRef);
    };

    getTable = (id) => {
        const tableDoc = doc(db, "timeTable", id);
        return getDoc(tableDoc);
    };
}

export default new TableDataService();