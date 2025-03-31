function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={` ${className} bg-blue-500 px-5 py-3 text-blue-50 rounded-md text-nowrap font-semibold cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
