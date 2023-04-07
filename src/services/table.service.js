import { db } from "../firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
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



    getAllTable = () => {
        return getDocs(TableCollectionRef);
    };

    getTable = (id) => {
        const tableDoc = doc(db, "timeTable", id);
        return getDoc(tableDoc);
    };
}
// eslint-disable-next-line
export default new TableDataService();