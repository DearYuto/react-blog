import { forwardRef, ForwardRefRenderFunction } from 'react';

type Props = {
  labelFor: string;
  label: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
const TextInputInner: ForwardRefRenderFunction<HTMLTextAreaElement, Props> = (
  { label, value, labelFor, placeholder, onChange },
  ref
) => {
  return (
    <>
      <label className="visually-hidden" htmlFor={labelFor}>
        {label}
      </label>
      <textarea
        ref={ref}
        value={value}
        className={`textarea write__textarea--${labelFor}`}
        onChange={onChange}
        id={labelFor}
        placeholder={placeholder}
      />
    </>
  );
};

const TextInput = forwardRef(TextInputInner);
export default TextInput;
