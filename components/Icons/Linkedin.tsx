interface IconProps {
  fill?: boolean;
}

const SvgComponent = ({ fill, ...props }: IconProps) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M44.457 0H3.543A3.543 3.543 0 0 0 0 3.543v40.914A3.543 3.543 0 0 0 3.543 48h40.914A3.543 3.543 0 0 0 48 44.457V3.543A3.543 3.543 0 0 0 44.457 0Zm-30.15 40.89H7.09V17.967h7.217V40.89Zm-3.614-26.1a4.143 4.143 0 1 1 4.167-4.14 4.083 4.083 0 0 1-4.167 4.14Zm30.214 26.12h-7.214V28.387c0-3.694-1.57-4.834-3.596-4.834-2.14 0-4.24 1.614-4.24 4.927v12.43H18.64V17.983h6.94v3.177h.093c.697-1.41 3.137-3.82 6.86-3.82 4.027 0 8.377 2.39 8.377 9.39l-.003 14.18Z"
        fill={fill ? '#fff' : '#0A66C2'}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
