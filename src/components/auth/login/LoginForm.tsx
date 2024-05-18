import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { LOGIN_FORM } from './constants/loginForm';

import { PATH } from '@/components/router/constants/path';
import LabelInput from '@/components/labelInput';
import Empty from '@/components/empty';

import { firebaseApp } from '@/services/firebase/firebaseConfig';
import { toast } from 'react-toastify';
import { isEmptyInput } from '@/utils/isEmpty';
import { ERROR_MESSAGES, MESSAGES } from '@/constants/common/messages';
import { COMMON } from '@/constants/common/common';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
      return;
    }

    if (e.target.id === 'password') {
      setPassword(e.target.value);
      return;
    }
  };

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    if (
      isEmptyInput(email, MESSAGES.REQUIRED_EMAIL) ||
      isEmptyInput(password, MESSAGES.REQUIRED_PASSWORD)
    )
      return;

    try {
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(MESSAGES.WELCOME);
    } catch (err) {
      toast.error(ERROR_MESSAGES.CHECK_USER_INFO);
      console.error(err);
    }
  };

  return (
    <div className="login">
      <h2>로그인</h2>
      <form onSubmit={onSubmitForm} className="login__form" method="POST">
        {LOGIN_FORM.map((loginItem) => {
          return (
            <React.Fragment key={loginItem.id}>
              <Empty style={{ height: '20px' }} />
              <LabelInput
                autoComplete={loginItem.autoComplete}
                inputType={loginItem.type}
                ariaInvalid={'true'}
                labelFor={loginItem.name}
                label={loginItem.label}
                placeholder={loginItem.placeholder}
                onChange={onChangeInput}
              />
            </React.Fragment>
          );
        })}
        <Empty style={{ height: '20px' }} />
        <button type="submit" className="login__button login__button--submit">
          {COMMON.LOGIN_TITLE}
        </button>
      </form>

      <div className="login__footer">
        <span className="login__footer-text">{MESSAGES.NOT_A_MEMBER}</span>
        <Link className="login__footer-text" to={PATH.join}>
          {COMMON.JOIN_TITLE}
        </Link>
      </div>
    </div>
  );
}
