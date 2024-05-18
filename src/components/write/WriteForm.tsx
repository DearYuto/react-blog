import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '@/store/contextAPI/AuthProvider';

import { PATH } from '../router/constants/path';

import { useMyForm } from '@/hooks/form/useMyForm';
import { usePostQuery } from '@/hooks/queries/usePostQuery';
import { validateFormInputs } from '@/utils/validation/validateFormInputs';
import { createSubmitStrategy, modifySubmitStrategy } from '../../utils/firebase/submitPost';

import type { WriteModeType } from '@/pages/write';

import TextInput from '../textInput';
import Button from '../button';
import Spinner from '../loading/Spinner';
import NotFoundPage from '@/pages/notfound';
import { ERROR_MESSAGES, MESSAGES } from '@/constants/common/messages';

const initFormState = {
  title: '',
  content: '',
};

const writeMode = {
  create: createSubmitStrategy,
  modify: modifySubmitStrategy,
} as const;

type Props = WriteModeType;

export default function WriteForm({ mode = 'create' }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formInputs, setFormInputs, onChangeFormInput } = useMyForm(initFormState);
  const { user } = useContext(AuthContext);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();

  // modify 모드일 때
  const strategy = writeMode[mode];
  const { id } = useParams();
  const { post, isError, isFetching } = usePostQuery(id!);

  useEffect(() => {
    if (inputRef.current) {
      const length = inputRef.current.value.length;
      inputRef.current.focus();
      inputRef.current.setSelectionRange(length, length);
    }

    setFormInputs({
      title: post ? post.title : '',
      content: post ? post.content : '',
    });
  }, [post, setFormInputs]);

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    // TODO 잘못된 path 진입 시 어떻게 처리할까?
    return <NotFoundPage />;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFormInputs(formInputs)) return;

    setIsSubmitting(true);

    try {
      // TODO 좋아요
      await strategy.submit(formInputs, user!, id!);

      const message = mode === 'create' ? MESSAGES.CREATE_POST : MESSAGES.MODIFY_POST;
      toast.success(message);

      navigate(PATH.root);
    } catch (err) {
      console.error(err);

      toast.error(ERROR_MESSAGES.GENERAL_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="write__form" onSubmit={onSubmit}>
      <TextInput
        ref={inputRef}
        value={formInputs.title}
        label="제목"
        labelFor="title"
        onChange={onChangeFormInput}
        placeholder={MESSAGES.REQUIRED_TITLE}
      />

      <label htmlFor="category">카테고리</label>
      <select name="" id="category">
        <option value="programming">Programming</option>
        <option value="etc">Etc</option>
      </select>

      <TextInput
        label="내용"
        value={formInputs.content}
        labelFor="content"
        onChange={onChangeFormInput}
        placeholder={MESSAGES.REQUIRED_CONTENTS}
      />

      <Button disabled={isSubmitting} type="submit">
        발행
      </Button>
    </form>
  );
}
