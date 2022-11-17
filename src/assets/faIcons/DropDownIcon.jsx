const DropDownIcon = ({ twClass, fill }) => {
  return (
    <svg
      className={twClass}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512">
      <path
        fill={fill}
        d="M432.6 209.3l-191.1 183.1C235.1 397.8 229.1 400 224 400s-11.97-2.219-16.59-6.688L15.41 209.3C5.814 200.2 5.502 184.1 14.69 175.4c9.125-9.625 24.38-9.938 33.91-.7187L224 342.8l175.4-168c9.5-9.219 24.78-8.906 33.91 .7187C442.5 184.1 442.2 200.2 432.6 209.3z"
      />
    </svg>
  );
};

export default DropDownIcon;
