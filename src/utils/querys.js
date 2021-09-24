import { Database, Doc } from "./firebase";
import { updateDoc, addDoc, setDoc } from "firebase/firestore";

export const updateUser = async (user) => {
  const doc = Doc(Database, "users", user.uid);
  await setDoc(doc, {
    name: user.displayName,
    photo: user.photoURL,
    email: user.email
  });
}