import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { JOIN_FORM } from './constants/joinForm';

import Empty from '@/components/empty';
import LabelInput from '@/components/labelInput';

interface IFormInput {
  email: string;
  password: string;
  rePassword: string;
}

export default function JoinForm() {
  const {
    control,
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
            <Controller
              key={item.id}
              control={control}
              name={item.name}
              rules={
                item.name === 'rePassword'
                  ? {
                      required: item.errorMessage,
                      validate: validatePasswordConfirm,
                    }
                  : {
                      required: item.errorMessage,
                      pattern: item.pattern,
                    }
              }
              render={({ field: { onChange, onBlur, ref } }) => {
                return (
                  <>
                    <LabelInput
                      required
                      label={item.label}
                      labelFor={item.name}
                      ariaInvalid={isSubmitted ? (errors.email ? 'true' : 'false') : undefined}
                      placeholder={item.placeholder}
                      inputType={item.type}
                      {...{ onChange, onBlur, ref }}
                    />
                    {errors[item.name] ? (
                      <small role="alert">{errors[item.name]?.message}</small>
                    ) : (
                      <Empty style={{ height: '20px' }} />
                    )}
                  </>
                );
              }}
            ></Controller>
          );
        })}

        <button className="join__button join__button--submit" disabled={isSubmitting} type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
