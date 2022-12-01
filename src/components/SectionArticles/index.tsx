import { SliderContent } from "../SliderContent";

function SectionArticles() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-6">
          <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
            Olá Dev!
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Acompanhe alguns de nossos artigos e fique por dentro de regras e leis para nos desenvolvedores.
          </p>

          {/* Divider */}
          <div className="flex mt-6 justify-center">
            <div className="w-20 h-0.5 rounded-full bg-gray-100 inline-flex"></div>
          </div>

          {/* Conteúdos */}
          <SliderContent />
        </div>
      </div>
    </section>
  );
}

export { SectionArticles }