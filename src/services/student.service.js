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

const studentCollectionRef = collection(db, "students");
class StudentDataService {

  addStudent = (newSubject) => {
    return addDoc(studentCollectionRef, newSubject);
  };

  updateStudent = (id, updatedAttendance) => {
    const studentDoc = doc(db, "students", id);
    return updateDoc(studentDoc, updatedAttendance);
  };

  // deleteBook = (id) => {
  //   const bookDoc = doc(db, "books", id);
  //   return deleteDoc(bookDoc);
  // };

  getAllStudents = () => {
    return getDocs(studentCollectionRef);
  };

  getStudent = (id) => {
    const studentDoc = doc(db, "students", id);
    return getDoc(studentDoc);
  };
}

export default new StudentDataService();