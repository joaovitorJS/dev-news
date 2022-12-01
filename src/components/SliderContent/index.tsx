import { useEffect, useRef, useState } from "react"
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react"
import { useNavigate } from "react-router-dom";
import Publications, { Publication } from "../../utils/Publications";
import { CardContent } from "../CardContent"

function SliderContent() {
  const slide = useRef<HTMLDivElement>(null);
  const [publications, setPublications] = useState<Publication[]>([]);
  const navigate = useNavigate();

  useEffect(() => {

    setPublications(Publications.get());

  }, [])

  const handleSlideLeft = () => {
    if (slide.current) {
      slide.current.scrollLeft = slide.current.scrollLeft - 400
    }
  }

  const handleSlideRight = () => {
    if (slide.current) {
      slide.current.scrollLeft = slide.current.scrollLeft + 400
    }
  }

  const handleNavigationArticle = (id: number) => {
    navigate(`/articles/${id}`)
  }

  return (
    <div className="container mt-10 lg:mt-20 px-5 mx-auto relative">
      <ArrowCircleLeft onClick={handleSlideLeft} size={40} className="z-50 text-zinc-400 transition-all hover:text-purple-200 absolute top-1/2 -left-5" />
      <div ref={slide} className="w-full h-full overflow-x-scroll no-scrollbar scroll whitespace-nowrap scroll-smooth grid grid-flow-col">
        {
          publications?.map(publication => {
            return (
              <CardContent key={publication.id} publication={publication} navigateToArticle={handleNavigationArticle} />
            )
          })
        }
      </div>
      <ArrowCircleRight onClick={handleSlideRight} size={40} className="z-50 text-zinc-400 transition-all hover:text-purple-200 absolute top-1/2 -right-5" />
    </div>
  )
}

export { SliderContent }