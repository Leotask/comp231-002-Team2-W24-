import { firestore } from '../firebase_setup/firebase'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';

const fetchContacts = async () => {
  const querySnapshot = await getDocs(collection(firestore, 'contacts'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
};

fetchContacts().catch(console.error);

export default fetchContacts