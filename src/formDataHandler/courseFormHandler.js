import { ref, set, push, child } from "firebase/database";
import { db } from ".././firebase/config";
function writeCourseFormData(data) {
  const key = push(child(ref(db), "courses/"));
  return set(key, data);
}

export { writeCourseFormData };
