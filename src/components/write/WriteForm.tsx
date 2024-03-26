import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { db } from '@/services/firebase/firebaseConfig';

import { AuthContext } from '@/store/contextAPI/AuthProvider';

import { PATH } from '../router/constants/path';

import { useMyForm } from '@/hooks/form/useMyForm';
import { isEmpty } from '@/utils/isEmpty';

import TextInput from '../textInput';
import Button from '../button';

export default function WriteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formInputs, onChangeFormInput } = useMyForm({
    title: '',
    content: '',
  });

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmpty(formInputs.title)) {
      return toast.error('제목을 입력해주세요.');
    }

    if (isEmpty(formInputs.content)) {
      return toast.error('내용을 입력해주세요.');
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'posts'), {
        ...formInputs,
        timeStamp: serverTimestamp(),
        createAt: new Date().toLocaleDateString(),
        author: user?.email,
      });

      toast.success('게시글이 등록되었습니다.');

      navigate(PATH.root);
    } catch (err) {
      console.error(err);

      toast.error('문제가 발생했어요. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="write__form" onSubmit={onSubmit}>
      <TextInput
        label="제목"
        labelFor="title"
        onChange={onChangeFormInput}
        placeholder="제목을 입력해주세요."
      />

      <TextInput
        label="내용"
        labelFor="content"
        onChange={onChangeFormInput}
        placeholder="내용을 입력해주세요."
      />

      <Button disabled={isSubmitting} type="submit">
        발행
      </Button>
    </form>
  );
}
