import { useState } from "react";
import { Hamburger } from "phosphor-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "../../icons/GithubIcon";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-opacity-60 bg-clip-padding  px-5 bg-black" style={{ backdropFilter: 'blur(5px)' }}>
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <Link
            to="/"
            className="flex text-3xl text-white font-medium mb-4 md:mb-0 hover:text-indigo-400 transition-all"
          >
            Leis x Dev
          </Link>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Hamburger size={32} />
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <Link
              to="/"
              className="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-indigo-400 transition-all font-semibold" >
              Home
            </Link>
            <a
              className="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-indigo-400 transition-all font-semibold"
              href="http://www.uems.br/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              UEMS
            </a>
          </div>
          <a
            href="https://github.com/joaovitorJS"
            rel="noopener noreferrer"
            target={"_blank"}
            className="pl-7 invisible md:visible"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}