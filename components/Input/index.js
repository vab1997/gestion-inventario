export default function Input({ type, placeholder }) {
  return (
    <>
      <input type={type} placeholder={placeholder} />
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
