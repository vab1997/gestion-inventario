export default function Button({ children, onClick, title }) {
  return (
    <>
      <button onClick={onClick} title={title}>
        {children}
      </button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #364250;
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
        button > :global(svg) {
          margin-right: 8px;
          margin-left: 8px;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
