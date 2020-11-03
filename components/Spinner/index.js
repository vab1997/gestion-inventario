export default function Spinner() {
  return (
    <>
      <div className="pulse"></div>
      <style jsx>{`
        .pulse {
          border-radius: 50%;
          height: 5em;
          background: cornflowerblue;
        }
        .pulse::after {
          content: "";
          position: absolute;
          width: 5em;
          height: 5em;
          z-index: 1;
          border-radius: 50%;
          background: cornflowerblue;
          animation: pulse 1s ease infinite;
        }
        @keyframes pulse {
          from {
            transform: scale(1);
            opacity: 1;
          }
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
