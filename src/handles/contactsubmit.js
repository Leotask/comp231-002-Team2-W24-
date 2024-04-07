import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"

const handleContact = (formData) => {
    const ref = collection(firestore, "contactFrom") // Firebase creates this automatically
 
    let data = formData;
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log("Error adding document: ",err)
    }
}
 
export default handleContact