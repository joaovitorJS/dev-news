import Placeholder from "../../images/image-default.jpg";
import { Publication } from "../../utils/Publications";

interface CardContentProps {
  publication: Publication;
  navigateToArticle: (id: number) => void;
}

function CardContent({ publication, navigateToArticle }: CardContentProps) {
  return (

    <div className="w-[400px] flex flex-col items-center text-center mr-4 last:mr-0">
      <img
        alt="team"
        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 prevent-select"
        src={publication?.image ? publication.image : Placeholder}
      ></img>
      <div className="w-full whitespace-normal">
        <h2 className="title-font font-medium text-lg text-white prevent-select">
          {publication?.author}
        </h2>
        <h3 className="text-gray-500 mb-3 prevent-select">{publication.occupation}</h3>
        <p className="mb-4 prevent-select">
          {publication.title}
        </p>
        <button onClick={() => navigateToArticle(publication.id)} className="mt-6 text-indigo-400 hover:text-white border-2 border-indigo-400 hover:bg-indigo-500 hover:border-indigo-500 hover:ring-2 hover:ring-indigo-300 focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all prevent-select">
          Aprender
        </button>
      </div>
    </div>

  );
}

export { CardContent };