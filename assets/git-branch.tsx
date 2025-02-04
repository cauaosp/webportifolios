export const GitBranch = ({ ...props }) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
    >
      <circle cx="4.5" cy="3.5" r="1.75" />
      <circle cx="11.5" cy="3.5" r="1.75" />
      <circle cx="4.5" cy="12.5" r="1.75" />
      <path d="m5.25 8.25c3 0 6 .5 6-2.5m-6.5 4.5v-4.5" />
    </svg>
  );
};
