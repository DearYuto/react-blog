type Props = {
  label: string;
  labelFor: string;
  required: boolean;
  inputType: React.HTMLInputTypeAttribute;
  placeholder?: string;
  ariaInvalid: 'true' | 'false' | undefined;
};

export default function LabelInput({
  label,
  inputType,
  labelFor,
  required,
  ariaInvalid,
  placeholder,
  ...rest
}: Props) {
  return (
    <>
      <label htmlFor={labelFor}>{label}</label>
      <input
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
}
