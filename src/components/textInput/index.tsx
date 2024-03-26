type Props = {
  labelFor: string;
  label: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function TextInput({ label, labelFor, placeholder, onChange }: Props) {
  return (
    <>
      <label className="visually-hidden" htmlFor={labelFor}>
        {label}
      </label>
      <textarea
        className={`textarea write__textarea--${labelFor}`}
        onChange={onChange}
        id={labelFor}
        placeholder={placeholder}
      />
    </>
  );
}
