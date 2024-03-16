import Empty from '@/components/empty';
import LabelInput from '@/components/labelInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { JOIN_FORM } from './constants/joinForm';

interface IFormInput {
  email: string;
  password: string;
  rePassword: string;
}

export default function JoinForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    watch,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const password = watch('password');
  const validatePasswordConfirm = (value: string) => {
    return value === password || '비밀번호가 일치하지 않습니다.';
  };

  return (
    <div className="join">
      <h2 className="join__title">회원가입</h2>
      <form className="join__form" onSubmit={handleSubmit(onSubmit)}>
        {JOIN_FORM.map((item) => {
          return (
            <LabelInput
              required
              label={item.name}
              key={item.id}
              labelFor={item.name}
              ariaInvalid={isSubmitted ? (errors.email ? 'true' : 'false') : undefined}
              placeholder={item.placeholder}
              inputType={item.type}
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '이메일 형식으로 입력해주세요.',
                },
              })}
            />
          );
        })}
        <label htmlFor="email">이메일</label>
        <input
          required
          aria-required="true"
          aria-invalid={'true'}
          id="email"
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '이메일 형식으로 입력해주세요.',
            },
          })}
        />
        {errors.email ? (
          <small role="alert">{errors.email.message}</small>
        ) : (
          <Empty style={{ height: '20px' }} />
        )}

        <label htmlFor="pw">비밀번호</label>
        <input
          id="pw"
          type="password"
          minLength={8}
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            pattern: {
              value: /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
              message: '8자리 이상 (특수문자, 대문자, 숫자 포함) 입력해주세요.',
            },
          })}
        />
        {errors.password ? (
          <small role="alert">{errors.password.message}</small>
        ) : (
          <Empty style={{ height: '20px' }} />
        )}

        <label htmlFor="re-pw">비밀번호 확인</label>
        <input
          minLength={8}
          type="password"
          id="re-pw"
          {...register('rePassword', {
            required: '비밀번호를 확인해주세요.',
            validate: validatePasswordConfirm,
          })}
        />
        {errors.rePassword ? (
          <small role="alert">{errors.rePassword.message}</small>
        ) : (
          <Empty style={{ height: '20px' }} />
        )}

        <button className="join__button join__button--submit" disabled={isSubmitting} type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
