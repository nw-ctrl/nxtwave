export function LogoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="nGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="50%" stopColor="#e0e0e0" stopOpacity="1" />
          <stop offset="100%" stopColor="#808080" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect width="100" height="100" fill="black" rx="20" />

      <text
        x="50"
        y="70"
        fontSize="60"
        fontWeight="bold"
        textAnchor="middle"
        fill="url(#nGradient)"
        fontFamily="Arial, sans-serif"
      >
        N
      </text>
    </svg>
  );
}

export function LogoText() {
  return (
    <svg
      width="150"
      height="40"
      viewBox="0 0 150 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="textGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#808080" stopOpacity="1" />
        </linearGradient>
      </defs>

      <text
        x="5"
        y="30"
        fontSize="28"
        fontWeight="600"
        fill="url(#textGradient)"
        fontFamily="Arial, sans-serif"
        letterSpacing="-1"
      >
        NextWave
      </text>
    </svg>
  );
}
