const Button = ({ text }) => {
  return (
    <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
      {text}
    </button>
  );
};

export default Button;