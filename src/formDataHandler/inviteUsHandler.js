import { ref, set, push, child } from "firebase/database";
import { db } from ".././firebase/config";
function writeInviteUsFormData(data) {
  const key = push(child(ref(db), "inviteus/"));
  return set(key, data);
}

export { writeInviteUsFormData };
