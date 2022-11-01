import { Link } from "react-router-dom";

export const CharacterCard = ({ id, name, description, thumbnail = {} }) => {
  const bgUrl = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <section className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between">
      <div className="mb-4">
        <div
          style={{ "--bg-url": `url(${bgUrl})` }}
          className="flex justify-center mb-4 border w-full h-96 rounded-lg bg-[image:var(--bg-url)] bg-cover bg-no-repeat bg-center grayscale hover:grayscale-0"
        ></div>

        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div>
        <Link
          to={`/characters/${id}`}
          className="text-sm flex-0 bg-gray-100 border border-gray-200 px-4 py-2 rounded-md"
        >
          Detalhes
        </Link>
      </div>
    </section>
  );
};
