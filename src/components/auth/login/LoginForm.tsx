import React from 'react';
import { Link } from 'react-router-dom';

import { LOGIN_FORM } from './constants/loginForm';

import { PATH } from '@/components/router/constants/path';

export default function LoginForm() {
  return (
    <div>
      <form method="POST">
        {LOGIN_FORM.map((loginItem) => {
          return (
            <React.Fragment key={loginItem.id}>
              <label htmlFor={loginItem.name}>{loginItem.name}</label>
              <input
                type={loginItem.type}
                id={loginItem.name}
                placeholder={loginItem.placeholder}
              />
            </React.Fragment>
          );
        })}
        <button>로그인</button>
      </form>
      <div>
        <span>아직 회원이 아니라면?</span>
        <Link to={PATH.join}>회원가입</Link>
      </div>
    </div>
  );
}
