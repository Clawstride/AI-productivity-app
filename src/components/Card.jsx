const Card = ({ title }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default Card;