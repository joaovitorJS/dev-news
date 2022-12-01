import CountUp from "react-countup";
import { InView } from 'react-intersection-observer';
import Publications from "../../utils/Publications";

function Accountants() {
  const totalArticles = Publications.getSize()

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4 text-center items-center justify-center">

          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
              <CountUp end={totalArticles} redraw={true}>
                {({ countUpRef, start }) => (
                  <InView onChange={start}>
                    <span ref={countUpRef} />
                  </InView>
                )}
              </CountUp>
            </h2>
            <p className="leading-relaxed">Artigos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Accountants }