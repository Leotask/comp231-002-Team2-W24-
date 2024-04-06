import { firestore } from '../src/firebase_setup/firebase'; 
import { collection, addDoc } from 'firebase/firestore';

const handleContact = async (formData) => {
  try {
    const docRef = await addDoc(collection(firestore, 'contacts'), {
      ...formData,
      createdAt: new Date(), // add a timestamp
    });
    console.log('Document written with ID: ', docRef.id); 
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default handleContact;
