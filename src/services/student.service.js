import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const studentCollectionRef = collection(db, "students");
class StudentDataService {

  addStudent = (newSubject) => {
    return addDoc(studentCollectionRef, newSubject);
  };

  updateStudent = (id, updatedAttendance) => {
    const studentDoc = doc(db, "students", id);
    return updateDoc(studentDoc, updatedAttendance);
  };


  getAllStudents = () => {
    return getDocs(studentCollectionRef);
  };

  getStudent = (id) => {
    const studentDoc = doc(db, "students", id);
    return getDoc(studentDoc);
  };
}

// eslint-disable-next-line
export default new StudentDataService();