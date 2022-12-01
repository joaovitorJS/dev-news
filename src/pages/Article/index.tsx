import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HourglassMedium, UserCircle } from "phosphor-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

import Publications, { Publication } from "../../utils/Publications";

const WORDS_READ_PER_MINUTE = 200; // 200 palavras por minuto.

function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [publication, setPublication] = useState<Publication>({} as Publication);

  const [article, setArticle] = useState<string>("");


  function timeReadingCalculation(article: string) {
    const numberWords = article.split(' ').length

    const time = Math.floor(numberWords / WORDS_READ_PER_MINUTE) + 1;

    return time;
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchDataArticle(path: string): Promise<string> {
      const data = await fetch(path).then(res => res.text());
      return data;
    }

    const initial = async () => {
      if (id && parseInt(id) !== NaN) {
        const publicationFound = Publications.getPublicationById(parseInt(id));

        if (publicationFound) {
          setPublication(publicationFound);

          const markdown = await fetchDataArticle(publicationFound.article)

          setArticle(markdown);

        } else {
          navigate("/");
        }
      } else {
        navigate("/");
      }

    }

    initial();

  }, []);

  return (
    <div className="w-full h-full text-white bg-black flex flex-col items-center">
      <Header />

      <main className="text-white mt-32 w-full flex flex-col items-center sm:w-[90%] md:w-[80%]">
        <div className="w-full flex flex-col items-center px-6">
          <h1 className="mt-6 font-medium text-3xl md:text-4xl lg:text-5xl">{publication.title}</h1>
          <div className="flex text-gray-500 space-x-2 self-start md:self-auto sm:space-x-4 mt-6 md:mt-10 w-full lg:w-[80%]">
            <span className="flex items-center justify-center">
              <UserCircle size={22} className="mr-1" />
              <span className="flex items-center text-center">
                {publication.author}
                <div className="mx-1 sm:mx-2 inline-block w-2 h-px bg-gray-500" />
                {publication.occupation}
              </span>
            </span>
            <span className="flex items-center text-center justify-center">
              <HourglassMedium size={22} className="mr-1" />
              {timeReadingCalculation(article)} min
            </span>
          </div>
        </div>

        <div className="mt-4 w-[80%] h-px bg-zinc-800" />

        <section className="px-6 w-full">
          <img
            src={publication.image}
            alt={publication.title}
            className="md:h-48 lg:h-56 md:max-w-lg object-cover mx-auto mt-6 rounded "
          />

          <ReactMarkdown
            children={article}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h2: ({ node, ...props }) => <h1 className="mt-6 font-semibold text-2xl md:text-3xl lg:text-4xl" {...props} />,
              h3: ({ node, ...props }) => <h1 className="mt-6 font-medium text-xl md:text-xl lg:text-2xl" {...props} />,
              p: ({ node, ...props }) => <p className="mt-4 text-base md:text-base lg:text-lg text-justify" {...props} />,
            }}
          />
        </section>

        <div className="px-6 self-start mt-6 flex flex-col space-y-3">
          <span className="font-light text-gray-300">Ver reportagem completa</span>
          <a
            className="uppercase tracking-widest font-medium text-indigo-400 self-center hover:bg-indigo-400 px-2 py-2 rounded-md hover:text-black transition-all duration-300"
            href={publication?.dataCompleted?.href}
            target="__blank"
          >
            {publication?.dataCompleted?.owner}
          </a>
        </div>

      </main>

      <div className="w-full mt-10 max-w-[80%]">
        <Footer />
      </div>
    </div>
  );
}

export { Article };