function Button({ children }) {
  return (
    <button className="bg-blue-500 px-5 py-3 text-blue-50 rounded-md text-nowrap">
      {children}
    </button>
  );
}

export default Button;
