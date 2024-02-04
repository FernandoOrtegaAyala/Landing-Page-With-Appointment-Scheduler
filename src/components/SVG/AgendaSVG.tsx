export default function AgendaSVG() {
  return (
    <>
      <svg
        fill="#000000"
        viewBox="0 0 24 24"
        id="note-check"
        data-name="Line Color"
        xmlns="http://www.w3.org/2000/svg"
        className="">
        <rect
          id="secondary"
          x={9}
          y={3}
          width={6}
          height={3}
          rx={1}
          style={{
            fill: "none",
            stroke: "#EA580C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
        <polyline
          id="secondary-2"
          data-name="secondary"
          points="9 13 11 15 15 11"
          style={{
            fill: "none",
            stroke: "#EA580C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
        <path
          id="primary"
          d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4"
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
      </svg>
    </>
  );
}
