import { ref, set, push, child } from "firebase/database";
import { db } from ".././firebase/config";
function writeServiceFormData(data) {
  const key = push(child(ref(db), "services/"));
  return set(key, data);
}

export { writeServiceFormData };
