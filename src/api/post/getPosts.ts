import { db } from '@/services/firebase/firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export interface IPost {
  id: string;
  author: string;
  content: string;
  createAt: string;
  title: string;
  likeCount: number;
}

export const getPosts = async () => {
  try {
    // TODO 인기순인 경우 좋아요로 정렬
    const postQuery = query(collection(db, 'posts'), orderBy('timeStamp', 'desc'));
    const querySnapshot = await getDocs(postQuery);

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
