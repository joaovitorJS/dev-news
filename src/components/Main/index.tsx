import { Accountants } from "../Accountants";
import { Hero } from "../Hero";
import { SectionArticles } from "../SectionArticles";
import { Title } from "../Title";

export default function Main() {
  return (
    <main className="text-black body-font lg:pt-20">
      <Title />
      <Hero />
      <section className="text-gray-600 body-font">
        <Accountants />

      </section>
      <div className="mt-6">
        <SectionArticles />
      </div>
    </main>
  );
}