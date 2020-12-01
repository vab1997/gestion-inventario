export default function Input({
  type,
  placeholder,
  value,
  onChange,
  disabled,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <style jsx>{`
        input {
          font-size: 16px;
          border-radius: 50px;
          border: solid 1px;
          width: 100%;
          margin: 8px 0 8px 0;
          padding: 8px;
          outline: none;
        }
      `}</style>
    </>
  );
}
