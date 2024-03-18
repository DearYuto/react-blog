import { db } from '@/services/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export interface IPost {
  author: string;
  content: string;
  createAt: string;
  title: string;
}

export const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));

    return querySnapshot.docs.map((doc) => {
      return {
        ...(doc.data() as IPost),
        id: doc.id,
      };
    });
  } catch (err) {
    throw new Error('게시글 데이터 가져오기 실패');
  }
};
