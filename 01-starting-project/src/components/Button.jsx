const Button = ({ children, ...props }) => {
  return (
    <button
      className="py-4 px-8 font-semibold uppercase rounded-md text-[#1f2937] bg-[#f0b322] border-none hover:bg-[#f0920e]"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

