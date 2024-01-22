import React from "react";

export const Cards = ({ news, seeMore, setSeeMore }) => {
  const displayedNews = seeMore ? news : news.slice(0, 8);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 gap-4 items-center justify-center">
      {displayedNews.map((item, index) => (
        <div
          key={index}
          className="w-full h-full border rounded-xl flex flex-col"
        >
          <img
            className="h-1/2 w-full p-0 rounded-t-xl"
            src={item.urlToImage}
            alt=""
          />
          <div className="px-6 text-center py-3 flex-grow text-lime-400">
            <h1>{item.author}</h1>
          </div>
          <h1 className="text-center px-4">{item.title}</h1>
          <a href={item.url} className="text-center py-3 text-red-600">
            See More
          </a>
        </div>
      ))}
    </div>
  );
};
