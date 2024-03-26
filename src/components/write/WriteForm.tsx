import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '@/store/contextAPI/AuthProvider';

import { PATH } from '../router/constants/path';

import { useMyForm } from '@/hooks/form/useMyForm';
import { usePostQuery } from '@/hooks/queries/usePostQuery';
import { validateFormInputs } from '@/utils/form/validateFormInputs';
import { createSubmitStrategy, modifySubmitStrategy } from './strategies';

import type { WriteModeType } from '@/pages/write';

import TextInput from '../textInput';
import Button from '../button';
import Spinner from '../loading/Spinner';

const initFormState = {
  title: '',
  content: '',
};

type Props = WriteModeType;

export default function WriteForm({ mode = 'create' }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formInputs, setFormInputs, onChangeFormInput } = useMyForm(initFormState);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  // modify 모드일 때
  const strategy = mode === 'create' ? createSubmitStrategy : modifySubmitStrategy;
  const { id } = useParams();
  const { post, isFetching } = usePostQuery(id!);

  useEffect(() => {
    setFormInputs({
      title: post ? post.title : '',
      content: post ? post.content : '',
    });
  }, [post, setFormInputs]);

  if (isFetching) {
    return <Spinner />;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFormInputs(formInputs)) return;

    setIsSubmitting(true);

    try {
      await strategy.submit(formInputs, user!, id!);

      const message = mode === 'create' ? '게시글이 등록되었습니다.' : '게시글이 수정되었습니다.';
      toast.success(message);

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
        value={formInputs.title}
        label="제목"
        labelFor="title"
        onChange={onChangeFormInput}
        placeholder="제목을 입력해주세요."
      />

      <TextInput
        label="내용"
        value={formInputs.content}
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
