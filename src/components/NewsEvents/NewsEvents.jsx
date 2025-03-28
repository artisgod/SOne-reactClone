import { useState, useEffect } from "react";
import newsImage from "../../assets/images/SOne_index_news_23.jpg"
import { useTranslation } from "react-i18next";

export default function NewsEvents() {

  const { t } = useTranslation();
  const newsItems = t("news", { returnObjects: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(newsItems.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const slides = [];
  for (let i = 0; i < newsItems.length; i += 3) {
    slides.push(newsItems.slice(i, i + 3));
  }

  return (
    <div className="border w-full lg:w-1/2 border-b-4 border-orange-500 text-center">
      <div className="flex w-full p-2 items-center border-b border-orange-500 justify-between"><h2 className="text-xl">News & Events</h2>
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded cursor-pointer hover:bg-orange-500 ${currentSlide === index ? "bg-orange-500" : "bg-black"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 33.33}%)`, width: `${totalSlides * 100}%` }}
        >
          {slides.map((group, index) => (
            <div key={index} className="w-full flex m-2 justify-center">
              {group.map((news) => (
                <div key={index} className="relative group w-full md:w-1/2 lg:w-1/3 border-r border-orange-500 px-2 bg-white cursor-pointer overflow-hidden">
                  <div className="absolute top-2 left-2 bg-black text-white text-sm px-2 py-1 rounded">
                    {news.date}
                  </div>
                  <img src={newsImage} alt={news.title} className="aspect-[16/9] w-full border-b-6 group-hover:border-orange-500 object-cover" />
                  <div className="p-2">
                    <h3 className="text-sm group-hover:underline">{news.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
