interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 800 800"
    >
      <path
        id="Subtraction_2"
        data-name="Subtraction 2"
        d="M400,913,0,113H292.5L492,510,691.5,113H800L400,913h0Zm93.5-464h0l-168-336h336l-168,336Z"
        transform="translate(0 -113)"
      />
    </svg>
  );
}
