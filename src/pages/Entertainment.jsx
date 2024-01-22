import React, { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
const Entertainment = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=088b63f8b2954c3fa50d3dcc65714851&category=entertainment"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="md:mx-8 md:my-16 m-4 ">
      <div className="flex justify-between items-center ">
        <h1 className="md:text-4xl text-xl my-5">Entertainment News</h1>
        <button
          onClick={() => {
            setSeeMore((prevSeeMore) => !prevSeeMore);
          }}
          className=" text-red-500 md:text-xl text-md"
        >
          {seeMore ? "See Less" : "See All"}
        </button>
      </div>
      <Cards news={news} seeMore={seeMore} setSeeMore={setSeeMore} />
    </div>
  );
};

export default Entertainment;
