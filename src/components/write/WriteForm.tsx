import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { db } from '@/services/firebase/firebaseConfig';

import { AuthContext } from '@/store/contextAPI/AuthProvider';

import { PATH } from '../router/constants/path';

import { useMyForm } from '@/hooks/form/useMyForm';

export default function WriteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formInputs, onChangeFormInput } = useMyForm({
    title: '',
    content: '',
  });

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const isEmptyInput = (target: 'title' | 'content') => {
    if (target === 'title') {
      return !formInputs.title;
    }

    if (target === 'content') {
      return !formInputs.content;
    }

    return false;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (isEmptyInput('title')) {
      return toast.error('제목을 입력해주세요.');
    }

    if (isEmptyInput('content')) {
      return toast.error('내용을 입력해주세요.');
    }

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
      <label className="visually-hidden" htmlFor="title">
        제목
      </label>
      <textarea
        className="textarea write__textarea--title"
        onChange={onChangeFormInput}
        id="title"
        placeholder="제목을 입력해주세요."
      />

      <label className="visually-hidden" htmlFor="content">
        내용
      </label>
      <textarea
        className="textarea write__textarea"
        onChange={onChangeFormInput}
        id="content"
        placeholder="내용을 입력해주세요."
      />

      <button disabled={isSubmitting} type="submit" className="button--primary">
        발행
      </button>
    </form>
  );
}
