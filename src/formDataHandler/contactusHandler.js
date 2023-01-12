import { ref, set, push, child } from "firebase/database";
import { db } from ".././firebase/config";
function writeContactusFormData(data) {
  const key = push(child(ref(db), "contactus/"));
  return set(key, data);
}

export { writeContactusFormData };
