import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

function Home() {
  return (
    <div className="w-full px-2 text-white bg-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export { Home };