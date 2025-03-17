function Button({ children, className }) {
  return (
    <button
      className={` ${className} bg-blue-500 px-5 py-3 text-blue-50 rounded-md text-nowrap font-semibold text-`}
    >
      {children}
    </button>
  );
}

export default Button;
