export default function Input({ type, placeholder, value, onChange }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
      <style jsx>{`
        input {
          font-size: 16px;
          border-radius: 50px;
          border: solid 1px;
          margin: 8px;
          padding: 8px;
          outline: none;
        }
      `}</style>
    </>
  );
}
