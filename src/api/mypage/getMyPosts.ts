import { db } from '@/services/firebase/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { IPost } from '../post/getPosts';

export const getMyPosts = async (email: string) => {
  try {
    const docRef = collection(db, 'posts'); // 컬렉션에서 쿼리 객체 생성

    const postQuery = query(docRef, where('author', '==', email));

    const querySnapshot = await getDocs(postQuery);

    return querySnapshot.docs.map((doc) => {
      return {
        ...(doc.data() as IPost),
        id: doc.id,
      };
    });
  } catch (err) {
    console.error('내 게시글 가져오기 실패');
  }
};
