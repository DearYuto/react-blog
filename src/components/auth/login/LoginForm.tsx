import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { LOGIN_FORM } from './constants/loginForm';

import { PATH } from '@/components/router/constants/path';
import LabelInput from '@/components/labelInput';
import Empty from '@/components/empty';

import { firebaseApp } from '@/services/firebase/firebaseConfig';
import { toast } from 'react-toastify';

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

    if (isEmpty()) return;

    try {
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('유로그에 오신 것을 환영합니다.');
    } catch (err) {
      toast.error('이메일/비밀번호를 다시 확인해주세요.');
      console.error(err);
    }
  };

  const isEmpty = () => {
    // TODO SRP 리팩토링
    if (!email) {
      toast.error('이메일을 입력해주세요.');
      return true;
    }

    if (!password) {
      toast.error('비밀번호를 입력해주세요.');
      return true;
    }

    return false;
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
          로그인
        </button>
      </form>

      <div className="login__footer">
        <span className="login__footer-text">아직 회원이 아니라면?</span>
        <Link className="login__footer-text" to={PATH.join}>
          회원가입
        </Link>
      </div>
    </div>
  );
}
