import * as React from "react";

export default function Computadora(props) {
  return (
    <svg
      height={512}
      viewBox="0 0 58 58"
      width={512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fillRule="nonzero" fill="none">
        <path
          d="M30 58h26a2.006 2.006 0 002-2V2a2.006 2.006 0 00-2-2H30a2.006 2.006 0 00-2 2v54a2 2 0 002 2z"
          fill="#285680"
        />
        <path d="M16 47h12v8H16z" fill="#547580" />
        <path d="M44 43v1a4 4 0 01-4 4H4a4 4 0 01-4-4v-1z" fill="#84b5cb" />
        <path d="M44 18v25H0V18a4 4 0 014-4h36a4 4 0 014 4z" fill="#2980ba" />
        <path
          d="M34 56a2.015 2.015 0 01-2 2H12a2.006 2.006 0 01-2-2 2.015 2.015 0 012-2h20a2.006 2.006 0 012 2z"
          fill="#84b5cb"
        />
        <rect fill="#2c3e50" height={4} rx={1} width={22} x={32} y={5} />
        <circle cx={51} cy={16} fill="#fb7b76" r={2} />
        <circle cx={51} cy={24} fill="#4fba6f" r={2} />
        <g fill="#2c3e50">
          <path d="M38 55a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zM42 55a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zM46 55a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zM50 55a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zM54 55a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1z" />
        </g>
        <path
          d="M36.82 14C36.65 20.09 34.86 38 0 38V18a4 4 0 014-4z"
          fill="#3b97d3"
        />
        <path
          d="M4 23a1 1 0 01-.707-1.707l4-4a1 1 0 011.414 1.414l-4 4A1 1 0 014 23zM4 29a1 1 0 01-.707-1.707l10-10a1 1 0 011.414 1.414l-10 10A1 1 0 014 29z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
