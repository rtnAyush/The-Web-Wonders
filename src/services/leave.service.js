import { db } from "../firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    doc,
} from "firebase/firestore";

const leaveFormCollectionRef = collection(db, "leaveForms");
class LeaveFormDataService {

    addForm = (newForm) => {
        return addDoc(leaveFormCollectionRef, newForm);
    };

    updateForm = (id, updatedForm) => {
        const formDoc = doc(db, "leaveForms", id);
        return updateDoc(formDoc, updatedForm);
    };


    getAllForms = () => {
        return getDocs(leaveFormCollectionRef);
    };

    getMyForm = (StudentId) => {
        return collection(db, "leaveForms").select(StudentId).get();
    }

    getForm = (StudentId) => {
        const formDoc = doc(db, "leaveForms", StudentId);
        return getDoc(formDoc);
    };
}

// eslint-disable-next-line
export default new LeaveFormDataService();