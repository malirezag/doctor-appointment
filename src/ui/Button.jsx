function Button({ children, className, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` ${className} bg-blue-500 px-5 py-3 text-blue-50 rounded-md text-nowrap font-semibold cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
