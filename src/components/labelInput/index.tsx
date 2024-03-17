import { forwardRef } from 'react';
import styles from './styles/labelInput.module.scss';

type Props = {
  label: string;
  labelFor: string;
  inputType: React.HTMLInputTypeAttribute;
  ariaInvalid: 'true' | 'false' | undefined;
  required?: boolean;
  placeholder?: string;
};

const LabelInput = forwardRef(function LabelInput(
  { label, inputType, labelFor, ariaInvalid, placeholder, required = false, ...rest }: Props,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <>
      <label className={styles.label} htmlFor={labelFor}>
        {label}
      </label>
      <input
        ref={ref}
        placeholder={placeholder}
        type={inputType}
        required={required}
        aria-required={required ? 'true' : 'false'}
        aria-invalid={ariaInvalid}
        id={labelFor}
        {...rest}
      />
    </>
  );
});

export default LabelInput;
