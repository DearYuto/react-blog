import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { JOIN_FORM } from './constants/joinForm';

import Empty from '@/components/empty';
import LabelInput from '@/components/labelInput';

import { firebaseApp } from '@/services/firebase/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { COMMON } from '@/constants/common/common';
import { ERROR_MESSAGES, MESSAGES } from '@/constants/common/messages';

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

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const auth = getAuth(firebaseApp);
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      toast.success(MESSAGES.USER_WELCOME);
    } catch (err) {
      console.error(err);
      toast.error(ERROR_MESSAGES.USER_ALREADY_EXISTS);
    }
  };

  const password = watch('password');
  const validatePasswordConfirm = (value: string) => {
    return value === password || JOIN_FORM[2].errorMessage;
  };

  return (
    <div className="join">
      <h2 className="join__title">{COMMON.JOIN_TITLE}</h2>
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
          {COMMON.JOIN_TITLE}
        </button>
      </form>
    </div>
  );
}
