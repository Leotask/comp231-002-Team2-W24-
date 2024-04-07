import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const handleRegistration = async (formData) => {
    const ref = collection(firestore, "registrations"); 

    try {
        await addDoc(ref, formData);
    } catch (err) {
        console.error("Error during registration:", err);
        throw err; // Rethrow to catch in component
    }
};

export default handleRegistration;
