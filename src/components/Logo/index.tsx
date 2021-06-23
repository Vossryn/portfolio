interface LogoProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  gradient?: boolean;
}

export default function Logo({
  className,
  height = 800,
  width = 800,
  gradient = false,
}: LogoProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 800 800"
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#3b82f6" />
          <stop offset="95%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {gradient ? (
        <path
          id="Subtraction_2"
          data-name="Subtraction 2"
          d="M400,913,0,113H292.5L492,510,691.5,113H800L400,913h0Zm93.5-464h0l-168-336h336l-168,336Z"
          transform="translate(0 -113)"
          fill="url('#myGradient')"
        />
      ) : (
        <path
          id="Subtraction_2"
          data-name="Subtraction 2"
          d="M400,913,0,113H292.5L492,510,691.5,113H800L400,913h0Zm93.5-464h0l-168-336h336l-168,336Z"
          transform="translate(0 -113)"
        />
      )}
    </svg>
  );
}
