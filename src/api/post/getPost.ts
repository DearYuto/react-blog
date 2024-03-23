import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/services/firebase/firebaseConfig';

export const getPost = async (id: string) => {
  try {
    const docRef = doc(db, 'posts', id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  } catch (err) {
    console.error('포스트 가져오기 실패');
  }
};
