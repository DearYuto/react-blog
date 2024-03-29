import { db } from '@/services/firebase/firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';

export async function deletePost(postId: string) {
  return deleteDoc(doc(db, 'posts', postId));
}
