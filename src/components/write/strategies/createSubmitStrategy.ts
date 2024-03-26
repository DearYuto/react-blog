import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { db } from '@/services/firebase/firebaseConfig';

import type { Form } from '@/hooks/form/useMyForm';
import type { User } from 'firebase/auth';

export const createSubmitStrategy = {
  submit: async (formInputs: Form, user: User) => {
    return addDoc(collection(db, 'posts'), {
      ...formInputs,
      timeStamp: serverTimestamp(),
      createAt: new Date().toLocaleDateString(),
      author: user?.email,
    });
  },
};
