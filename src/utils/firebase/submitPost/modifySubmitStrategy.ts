import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';

import { db } from '@/services/firebase/firebaseConfig';

import type { Form } from '@/hooks/form/useMyForm';
import type { User } from 'firebase/auth';

export const modifySubmitStrategy = {
  submit: async (formInputs: Form, user: User, id: string, likeCount: number) => {
    const docRef = doc(db, 'posts', id);
    return updateDoc(docRef, {
      ...formInputs,
      timeStamp: serverTimestamp(),
      author: user?.email,
      likeCount,
    });
  },
};
