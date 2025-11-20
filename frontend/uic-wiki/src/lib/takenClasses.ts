import { db } from "@/firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

export async function getTakenStatus(uid: string, courseNo: number) {
  const ref = doc(db, `users/${uid}/takenClasses/${courseNo}`);
  const snap = await getDoc(ref);
  return snap.exists();
}

export async function setTakenStatus(uid: string, courseNo: number, taken: boolean) {
  const ref = doc(db, `users/${uid}/takenClasses/${courseNo}`);

  if (taken) {
    await setDoc(ref, { taken: true });
  } else {
    await deleteDoc(ref);
  }
}
