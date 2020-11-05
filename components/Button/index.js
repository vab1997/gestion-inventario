export default function Button({ children, onClick, title }) {
  return (
    <>
      <button onClick={onClick} title={title}>
        {children}
      </button>
      <style jsx>{`
        button {
          background: black;
          border-radius: 9999px;
          border: 0;
          color: #fff;
          cursor: pointer;
          font-size: 16px;
          text-align: center;
          font-weight: 600;
          margin: 8px;
          padding: 8px;
          transition: opacity 0.3s ease;
          user-select: none;
          outline: none;
        }
      `}</style>
    </>
  );
}
